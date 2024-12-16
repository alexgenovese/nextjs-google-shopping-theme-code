import React from 'react';

interface SpecificationsProps {
  specs: Record<string, string>;
}

export function Specifications({ specs }: SpecificationsProps) {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Specifiche tecniche</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="flex gap-2">
            <span className="text-gray-600 min-w-[120px]">{key}:</span>
            <span className="font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}