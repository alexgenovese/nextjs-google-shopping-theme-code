import React from 'react';
import type { PriceOption } from '../../types/product';

interface PriceComparisonProps {
  options: PriceOption[];
}

export function PriceComparison({ options }: PriceComparisonProps) {
  return (
    <div className="bg-white rounded-lg p-6 space-y-4">
      <h2 className="text-lg font-semibold">Opzioni di acquisto</h2>
      <div className="space-y-3">
        {options.map((option, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">€{option.price.toFixed(2)}</span>
                {option.isPromotion && option.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    €{option.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">
                Consegna a €{option.shipping.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">{option.store}</p>
            </div>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200">
              Visita il sito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}