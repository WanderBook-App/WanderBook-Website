// src/components/ui/card.jsx
import React from 'react';

export function Card({ children }) {
  return <div className="p-4 bg-white shadow-md rounded-lg">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}
