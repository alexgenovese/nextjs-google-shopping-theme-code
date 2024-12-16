import React from 'react';

interface ProductGalleryProps {
  mainImage: string;
  title: string;
}

export function ProductGallery({ mainImage, title }: ProductGalleryProps) {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="aspect-square w-full max-w-xl mx-auto">
        <img
          src={mainImage}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}