"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll";
import { Helmet } from "react-helmet-async";
import galleryData from "@/content/gallery.json"; // ✅ import from CMS

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const title = useFadeInOnScroll();
  const mobileSlider = useFadeInOnScroll();

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrevious = () =>
    selectedImage !== null &&
    setSelectedImage(selectedImage === 0 ? galleryData.images.length - 1 : selectedImage - 1);
  const goToNext = () =>
    selectedImage !== null &&
    setSelectedImage(selectedImage === galleryData.images.length - 1 ? 0 : selectedImage + 1);

  const goToPreviousSlide = () =>
    setCurrentSlide(currentSlide === 0 ? galleryData.images.length - 1 : currentSlide - 1);
  const goToNextSlide = () =>
    setCurrentSlide(currentSlide === galleryData.images.length - 1 ? 0 : currentSlide + 1);

  return (
    <>
      <Helmet>
        <title>{galleryData.title} | Highfield Road Christmas Lights 🎄</title>
        <meta name="description" content={galleryData.subtitle} />
      </Helmet>

      <section className="py-8 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* ✨ Header */}
          <div
            ref={title.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">{galleryData.title}</h2>
              <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
            </div>
            <div className="w-24 h-1 bg-linear-to-r from-red-500 via-green-500 to-red-500 mx-auto rounded-full" />
            <p className="text-gray-300 mt-6 text-lg">{galleryData.subtitle}</p>
          </div>

          {/* 📱 Mobile Slider */}
          <div
            ref={mobileSlider.ref}
            className={`md:hidden mb-8 transition-all duration-700 ${
              mobileSlider.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative">
              <button
                onClick={() => openLightbox(currentSlide)}
                className="w-full aspect-4/3 rounded-lg border-2 border-red-500/30 overflow-hidden bg-slate-800/50 backdrop-blur-sm"
              >
                <img
                  src={galleryData.images[currentSlide].src}
                  alt={galleryData.images[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
              </button>
              <button onClick={goToPreviousSlide} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={goToNextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* 🖼️ Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.images.map((img, index) => {
              const fade = useFadeInOnScroll();
              return (
                <div
                  key={index}
                  ref={fade.ref}
                  className={`transition-all duration-700 ${
                    fade.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
  onClick={() => openLightbox(index)}
  className="group relative overflow-hidden rounded-lg border-2 border-red-500/30 hover:border-green-500/50 aspect-4/3 bg-slate-800/50 backdrop-blur-sm w-full"
>
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center pb-4 transition">
                      <span className="text-white font-semibold">Click to view</span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* 💡 Lightbox */}
          {selectedImage !== null && (
            <div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-red-500">
                <X className="w-8 h-8" />
              </button>

              <button onClick={(e) => { e.stopPropagation(); goToPrevious(); }} className="absolute left-4 text-white hover:text-green-500">
                <ChevronLeft className="w-12 h-12" />
              </button>

              <div className="max-w-5xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
                <img
                  src={galleryData.images[selectedImage].src}
                  alt={galleryData.images[selectedImage].alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
              </div>

              <button onClick={(e) => { e.stopPropagation(); goToNext(); }} className="absolute right-4 text-white hover:text-green-500">
                <ChevronRight className="w-12 h-12" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
