// src/components/ui/input.jsx
import React from 'react';

export function Input({ placeholder, className }) {
  return <input type="text" placeholder={placeholder} className={`p-2 border rounded ${className}`} />;
}
