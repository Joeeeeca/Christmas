"use client";

import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll";
import { Gift, Star, Sparkles } from "lucide-react";
import { FairyLights } from "./fairy-lights";
import { Helmet } from "react-helmet-async";
import aboutData from "@/content/about.json"; // ✅ Import JSON data

export default function AboutSection() {
  const title = useFadeInOnScroll();

  return (
    <section id="about-section" className="relative py-16 px-4 sm:px-6 lg:pt-8 pb-6 christmas-lights text-glow">
      <Helmet>
        <title>About | Highfield Road Christmas Lights 🎄</title>
        <meta
          name="description"
          content="Learn how Highfield Road Christmas Lights began — a family tradition bringing festive joy and raising money for Isle of Wight charities."
        />
      </Helmet>

      {/* ✨ Fairy Lights Divider */}
      <div className="absolute -top-8 left-0 w-full z-20">
        <FairyLights />
      </div>

      <div className="max-w-4xl mx-auto">
        <div
          ref={title.ref}
          className={`text-center mb-12 transition-all duration-700 ${
            title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mt-8 mb-4">
            <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
            <h2 className="text-4xl font-bold text-white">{aboutData.title}</h2> {/* ✅ Dynamic title */}
            <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
          </div>

          <div className="w-24 h-1 mx-auto rounded-full bg-linear-to-r from-christmas-red via-christmas-green to-christmas-gold" />
        </div>

        {/* ✨ Cards from JSON */}
        <div className="space-y-8 text-lg leading-relaxed">
          {aboutData.sections.map((section, i) => (
            <div
              key={i}
              className="rounded-lg p-8 border border-christmas-gold/30 bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-700 hover:shadow-[0_0_35px_rgba(255,255,150,0.25)]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-christmas-gold/10">
                  {section.icon === "star" && <Star className="w-6 h-6 text-christmas-gold" />}
                  {section.icon === "gift" && <Gift className="w-6 h-6 text-christmas-red" />}
                  {section.icon === "sparkles" && <Sparkles className="w-6 h-6 text-christmas-green" />}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{section.heading}</h3>
                  <p className="text-slate-300">{section.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
