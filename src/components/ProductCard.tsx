import React from 'react';
import { Star, Heart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  rating: number;
  image: string;
  store: string;
  freeShipping?: boolean;
}

export function ProductCard({ title, price, rating, image, store, freeShipping }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 relative group">
      <button className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
      </button>
      <div className="aspect-square mb-4 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">{rating}</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-semibold">${price.toFixed(2)}</span>
          {freeShipping && (
            <span className="text-xs text-green-600">Free shipping</span>
          )}
        </div>
        <p className="text-xs text-gray-500">from {store}</p>
      </div>
    </div>
  );
}