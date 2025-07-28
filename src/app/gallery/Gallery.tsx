'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
  imagesByYear: { year: string; images: string[] }[];
  allImages: string[];
}

const Gallery = ({ imagesByYear, allImages }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = allImages.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % allImages.length;
      setSelectedImage(allImages[nextIndex]);
    }
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = allImages.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
      setSelectedImage(allImages[prevIndex]);
    }
  };

  return (
    <>
      {imagesByYear.map(({ year, images }) => (
        <div key={year} className="mb-12">
          <h3 className="text-3xl font-bold mb-6 theme-text-secondary">{year}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map(imageSrc => (
              <div key={imageSrc} className="relative w-full h-64 cursor-pointer" onClick={() => openModal(imageSrc)}>
                <Image
                  src={imageSrc}
                  alt={`Gallery image from ${year}`}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Enlarged gallery image"
              width={1200}
              height={800}
              style={{ objectFit: 'contain', maxHeight: '80vh', maxWidth: '80vw' }}
              className="rounded-lg"
            />
            <button onClick={closeModal} className="absolute top-4 right-4 text-white text-3xl font-bold bg-black/50 hover:bg-black/75 rounded-full w-10 h-10 flex items-center justify-center leading-none transition-colors">&times;</button>
            <button onClick={showPrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/50 hover:bg-black/75 rounded-full w-10 h-10 flex items-center justify-center transition-colors">&#8249;</button>
            <button onClick={showNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/50 hover:bg-black/75 rounded-full w-10 h-10 flex items-center justify-center transition-colors">&#8250;</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
