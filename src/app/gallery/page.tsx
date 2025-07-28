import fs from 'fs';
import path from 'path';
import { Header } from '@/app/Header';
import { Footer } from '@/app/Footer';
import Gallery from './Gallery';

const GalleryPage = () => {
  const galleryDirectory = path.join(process.cwd(), 'public');
  const yearFolders = fs.readdirSync(galleryDirectory).filter(file => {
    try {
      const stat = fs.statSync(path.join(galleryDirectory, file));
      return stat.isDirectory() && /^\d{4}$/.test(file);
    } catch {
      return false;
    }
  });

  const allImages = yearFolders.flatMap(year => {
    const yearDirectory = path.join(galleryDirectory, year);
    const imageFiles = fs.readdirSync(yearDirectory).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    return imageFiles.map(image => `/${year}/${image}`);
  });

  const imagesByYear = yearFolders.map(year => {
    const yearDirectory = path.join(galleryDirectory, year);
    const imageFiles = fs.readdirSync(yearDirectory).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    return {
      year,
      images: imageFiles.map(image => `/${year}/${image}`)
    };
  }).sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <div className="theme-bg-primary theme-text-primary min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24 flex-grow">
        <h2 className="text-4xl font-bold text-center mb-12 theme-text-primary">Picture Gallery</h2>
        <Gallery imagesByYear={imagesByYear} allImages={allImages} />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
