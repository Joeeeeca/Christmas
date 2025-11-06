"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll";
import { Helmet } from "react-helmet-async";
import visitData from "@/content/visit.json"; // ✅ import CMS data

export default function VisitSection() {
  const [mapError, setMapError] = useState(false);
  const title = useFadeInOnScroll();
  const grid = useFadeInOnScroll();

  return (
    <>
      <Helmet>
        <title>{visitData.title} | Highfield Road Christmas Lights 🎄</title>
      </Helmet>

      <section id="visit-section" className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={title.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
              <h2 className="text-4xl font-bold text-white">{visitData.title}</h2>
              <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
            </div>
          </div>

          <div
            ref={grid.ref}
            className={`flex justify-center transition-all duration-700 ${
              grid.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[auto_1.6fr] gap-6 items-center justify-items-center md:justify-items-start w-full">
              {/* Image */}
              <div className="rounded-lg overflow-hidden border-2 border-christmas-gold/30 shadow-lg">
                <img
                  src={visitData.visitingHoursImage}
                  alt="Visiting Hours"
                  className="max-h-[400px] w-auto object-contain"
                />
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border-2 border-christmas-gold/30 shadow-lg h-[400px] w-full max-w-[650px]">
                {mapError ? (
                  <img
                    src={visitData.fallbackImage}
                    alt="Map fallback"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <iframe
                    src={visitData.mapEmbedUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    onError={() => setMapError(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
