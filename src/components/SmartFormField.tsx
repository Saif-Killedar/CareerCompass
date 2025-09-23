'use client';

import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Eye, EyeOff, Info } from 'lucide-react';

interface ValidationRule {
  test: (value: string) => boolean;
  message: string;
  type: 'error' | 'warning' | 'info';
}

interface SmartFormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'select';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  options?: { value: string; label: string }[];
  validationRules?: ValidationRule[];
  required?: boolean;
  helpText?: string;
  autoSave?: boolean;
  onAutoSave?: (value: string) => void;
  realTimeValidation?: boolean;
}

export default function SmartFormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon,
  options,
  validationRules = [],
  required = false,
  helpText,
  autoSave = false,
  onAutoSave,
  realTimeValidation = true
}: SmartFormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(false);
  const [validationResults, setValidationResults] = useState<{
    errors: string[];
    warnings: string[];
    infos: string[];
    isValid: boolean;
  }>({ errors: [], warnings: [], infos: [], isValid: true });

  // Auto-save functionality
  useEffect(() => {
    if (autoSave && onAutoSave && value && touched) {
      const timeoutId = setTimeout(() => {
        onAutoSave(value);
      }, 1000); // Auto-save after 1 second of no typing

      return () => clearTimeout(timeoutId);
    }
  }, [value, autoSave, onAutoSave, touched]);

  // Real-time validation
  useEffect(() => {
    if (realTimeValidation && touched) {
      const errors: string[] = [];
      const warnings: string[] = [];
      const infos: string[] = [];

      // Required field validation
      if (required && !value.trim()) {
        errors.push(`${label} is required`);
      }

      // Custom validation rules
      validationRules.forEach(rule => {
        if (!rule.test(value)) {
          switch (rule.type) {
            case 'error':
              errors.push(rule.message);
              break;
            case 'warning':
              warnings.push(rule.message);
              break;
            case 'info':
              infos.push(rule.message);
              break;
          }
        }
      });

      setValidationResults({
        errors,
        warnings,
        infos,
        isValid: errors.length === 0
      });
    }
  }, [value, validationRules, required, label, touched, realTimeValidation]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched(true);
    onChange(e);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const getFieldStatus = () => {
    if (!touched) return 'neutral';
    if (validationResults.errors.length > 0) return 'error';
    if (validationResults.warnings.length > 0) return 'warning';
    if (value && validationResults.isValid) return 'success';
    return 'neutral';
  };

  const status = getFieldStatus();

  const getFieldClasses = () => {
    const baseClasses = `
      w-full py-3 px-4 border rounded-xl font-ui
      focus:ring-2 focus:ring-primary-500 focus:border-transparent
      transition-all duration-200 bg-white
      ${icon ? 'pl-11' : ''}
      ${type === 'password' ? 'pr-11' : ''}
    `;

    const statusClasses = {
      neutral: 'border-neutral-300 hover:border-primary-400',
      error: 'border-red-300 bg-red-50 focus:ring-red-500',
      warning: 'border-yellow-300 bg-yellow-50 focus:ring-yellow-500',
      success: 'border-green-300 bg-green-50 focus:ring-green-500'
    };

    return `${baseClasses} ${statusClasses[status]}`;
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <Info className="w-5 h-5 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-2">
      {/* Label */}
      <label className="block text-sm font-semibold text-neutral-700 font-ui">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
        {autoSave && touched && (
          <span className="text-xs text-green-600 ml-2">✓ Auto-saved</span>
        )}
      </label>

      {/* Input Container */}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 z-10">
            {icon}
          </div>
        )}

        {/* Input Field */}
        {type === 'select' ? (
          <select
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getFieldClasses()}
            required={required}
          >
            <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
            {options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={getFieldClasses()}
            required={required}
          />
        )}

        {/* Password Toggle */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}

        {/* Status Icon */}
        {touched && getStatusIcon() && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {getStatusIcon()}
          </div>
        )}
      </div>

      {/* Help Text */}
      {helpText && !touched && (
        <p className="text-sm text-neutral-600 font-ui flex items-center">
          <Info className="w-4 h-4 mr-1" />
          {helpText}
        </p>
      )}

      {/* Validation Messages */}
      {touched && (
        <div className="space-y-1">
          {/* Error Messages */}
          {validationResults.errors.map((error, index) => (
            <div key={`error-${index}`} className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <p className="text-sm text-red-600 font-ui">{error}</p>
            </div>
          ))}

          {/* Warning Messages */}
          {validationResults.warnings.map((warning, index) => (
            <div key={`warning-${index}`} className="flex items-center space-x-2">
              <Info className="w-4 h-4 text-yellow-500 flex-shrink-0" />
              <p className="text-sm text-yellow-600 font-ui">{warning}</p>
            </div>
          ))}

          {/* Success Message */}
          {status === 'success' && (
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <p className="text-sm text-green-600 font-ui">Looks good!</p>
            </div>
          )}

          {/* Info Messages */}
          {validationResults.infos.map((info, index) => (
            <div key={`info-${index}`} className="flex items-center space-x-2">
              <Info className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <p className="text-sm text-blue-600 font-ui">{info}</p>
            </div>
          ))}
        </div>
      )}

      {/* Real-time Validation Indicator */}
      {realTimeValidation && touched && (
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span>Real-time validation enabled</span>
          {validationResults.isValid && value && (
            <span className="text-green-600">✓ Valid</span>
          )}
        </div>
      )}
    </div>
  );
}

// Common validation rules
export const validationRules = {
  email: {
    test: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: 'Please enter a valid email address',
    type: 'error' as const
  },
  phone: {
    test: (value: string) => /^[+]?[\d\s-()]{10,}$/.test(value),
    message: 'Please enter a valid phone number',
    type: 'error' as const
  },
  password: {
    test: (value: string) => value.length >= 6,
    message: 'Password must be at least 6 characters long',
    type: 'error' as const
  },
  strongPassword: {
    test: (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value),
    message: 'Password should contain uppercase, lowercase, number and special character',
    type: 'warning' as const
  },
  name: {
    test: (value: string) => value.trim().length >= 2,
    message: 'Name must be at least 2 characters long',
    type: 'error' as const
  }
};
