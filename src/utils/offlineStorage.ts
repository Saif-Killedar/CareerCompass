// Offline Storage Utility for CareerCompass
// Uses IndexedDB for storing user data offline

interface QuizResult {
  id: string;
  userId?: string;
  answers: Record<string, string>;
  result: string;
  timestamp: number;
  synced: boolean;
}

interface UserProgress {
  id: string;
  userId?: string;
  currentPage: string;
  completedSections: string[];
  bookmarkedCareers: string[];
  timestamp: number;
  synced: boolean;
}

interface CachedContent {
  id: string;
  type: 'career' | 'college' | 'course';
  data: any;
  timestamp: number;
  expiresAt: number;
}

class OfflineStorage {
  private dbName = 'CareerCompassDB';
  private version = 1;
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Quiz Results Store
        if (!db.objectStoreNames.contains('quizResults')) {
          const quizStore = db.createObjectStore('quizResults', { keyPath: 'id' });
          quizStore.createIndex('timestamp', 'timestamp', { unique: false });
          quizStore.createIndex('synced', 'synced', { unique: false });
        }

        // User Progress Store
        if (!db.objectStoreNames.contains('userProgress')) {
          const progressStore = db.createObjectStore('userProgress', { keyPath: 'id' });
          progressStore.createIndex('timestamp', 'timestamp', { unique: false });
        }

        // Cached Content Store
        if (!db.objectStoreNames.contains('cachedContent')) {
          const contentStore = db.createObjectStore('cachedContent', { keyPath: 'id' });
          contentStore.createIndex('type', 'type', { unique: false });
          contentStore.createIndex('expiresAt', 'expiresAt', { unique: false });
        }
      };
    });
  }

  // Quiz Results Methods
  async saveQuizResult(result: Omit<QuizResult, 'id' | 'timestamp' | 'synced'>): Promise<string> {
    if (!this.db) await this.init();

    const id = `quiz_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const quizResult: QuizResult = {
      ...result,
      id,
      timestamp: Date.now(),
      synced: false
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['quizResults'], 'readwrite');
      const store = transaction.objectStore('quizResults');
      const request = store.add(quizResult);

      request.onsuccess = () => resolve(id);
      request.onerror = () => reject(request.error);
    });
  }

  async getQuizResults(): Promise<QuizResult[]> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['quizResults'], 'readonly');
      const store = transaction.objectStore('quizResults');
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async getUnsyncedQuizResults(): Promise<QuizResult[]> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['quizResults'], 'readonly');
      const store = transaction.objectStore('quizResults');
      const index = store.index('synced');
      const request = index.getAll(IDBKeyRange.only(false));

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async markQuizResultSynced(id: string): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['quizResults'], 'readwrite');
      const store = transaction.objectStore('quizResults');
      const getRequest = store.get(id);

      getRequest.onsuccess = () => {
        const result = getRequest.result;
        if (result) {
          result.synced = true;
          const putRequest = store.put(result);
          putRequest.onsuccess = () => resolve();
          putRequest.onerror = () => reject(putRequest.error);
        } else {
          reject(new Error('Quiz result not found'));
        }
      };
      getRequest.onerror = () => reject(getRequest.error);
    });
  }

  // User Progress Methods
  async saveUserProgress(progress: Omit<UserProgress, 'id' | 'timestamp' | 'synced'>): Promise<void> {
    if (!this.db) await this.init();

    const id = progress.userId || 'anonymous';
    const userProgress: UserProgress = {
      ...progress,
      id,
      timestamp: Date.now(),
      synced: false
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['userProgress'], 'readwrite');
      const store = transaction.objectStore('userProgress');
      const request = store.put(userProgress);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async getUserProgress(userId?: string): Promise<UserProgress | null> {
    if (!this.db) await this.init();

    const id = userId || 'anonymous';

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['userProgress'], 'readonly');
      const store = transaction.objectStore('userProgress');
      const request = store.get(id);

      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  // Cached Content Methods
  async cacheContent(type: CachedContent['type'], data: any, ttl: number = 24 * 60 * 60 * 1000): Promise<void> {
    if (!this.db) await this.init();

    const id = `${type}_${Date.now()}`;
    const content: CachedContent = {
      id,
      type,
      data,
      timestamp: Date.now(),
      expiresAt: Date.now() + ttl
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['cachedContent'], 'readwrite');
      const store = transaction.objectStore('cachedContent');
      const request = store.add(content);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async getCachedContent(type: CachedContent['type']): Promise<any[]> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['cachedContent'], 'readonly');
      const store = transaction.objectStore('cachedContent');
      const index = store.index('type');
      const request = index.getAll(type);

      request.onsuccess = () => {
        const now = Date.now();
        const validContent = request.result
          .filter(item => item.expiresAt > now)
          .map(item => item.data);
        resolve(validContent);
      };
      request.onerror = () => reject(request.error);
    });
  }

  // Cleanup expired content
  async cleanupExpiredContent(): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['cachedContent'], 'readwrite');
      const store = transaction.objectStore('cachedContent');
      const index = store.index('expiresAt');
      const now = Date.now();
      
      const request = index.openCursor(IDBKeyRange.upperBound(now));
      
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          resolve();
        }
      };
      request.onerror = () => reject(request.error);
    });
  }

  // Check if online
  isOnline(): boolean {
    return navigator.onLine;
  }

  // Get storage usage
  async getStorageQuota(): Promise<{ used: number; quota: number }> {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      const estimate = await navigator.storage.estimate();
      return {
        used: estimate.usage || 0,
        quota: estimate.quota || 0
      };
    }
    return { used: 0, quota: 0 };
  }
}

// Export singleton instance
export const offlineStorage = new OfflineStorage();

// Initialize on import
if (typeof window !== 'undefined') {
  offlineStorage.init().catch(console.error);
}
