"use client";

import Button from "@/components/ui/button";
import { Snowfall } from "@/components/snowfall";
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll";
import { Helmet } from "react-helmet-async";
import content from "@/content/hero.json"; // 👈 imported content

export default function HeroSection() {
  const title = useFadeInOnScroll();
  const paragraph = useFadeInOnScroll();
  const buttons = useFadeInOnScroll();

  // Automatically turn any URL inside the text into a clickable link
  function linkify(text: string) {
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;

    return text.split(urlRegex).map((part, i) => {
      if (urlRegex.test(part)) {
        const url = part.startsWith("http") ? part : `https://${part}`;
        return (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300 hover:text-blue-400"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* 🧠 SEO Metadata */}
      <Helmet>
        <title>Highfield Road Christmas Lights 🎄</title>
        <meta
          name="description"
          content="Experience the magic of Highfield Road Christmas Lights Display — a family tradition spreading joy and raising funds for Isle of Wight charities."
        />
        <meta property="og:title" content="Highfield Road Christmas Lights 🎄" />
        <meta
          property="og:description"
          content="Visit our festive light display and support local Isle of Wight charities this Christmas season!"
        />
        <meta property="og:image" content="/images/website-logo.jpg" />
        <meta
          property="og:url"
          content="https://highfieldroadchristmaslights.com/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Highfield Road Christmas Lights Display 🎄"
        />
        <meta
          name="twitter:description"
          content="Spreading festive joy and supporting Isle of Wight charities every Christmas."
        />
        <meta name="twitter:image" content="/images/website-logo.jpg" />
      </Helmet>

      {/* 🌌 Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${content.backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/60 backdrop-blur-[2px]" />
      </div>

      {/* ❄️ Snowfall Layer */}
      <Snowfall />

      {/* ✨ Animated Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div
          className="inline-block bg-black/25 backdrop-blur-[2px] rounded-xl px-6 py-6 mx-auto mb-6"
          style={{
            boxShadow: "0 0 40px rgba(0,0,0,0.4)",
          }}
        >
          <h1
            ref={title.ref}
            className={`mb-4 text-balance font-sans text-4xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-6xl transition-all duration-700 ${
              title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
            style={{
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            {content.title}
          </h1>

          <p
            ref={paragraph.ref}
            className={`text-pretty text-xl leading-relaxed text-white/90 md:text-2xl lg:text-3xl transition-all duration-700 delay-200 ${
              paragraph.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
            style={{
              textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
            }}
          >
            {linkify(content.text)}
          </p>
        </div>

        {/* ✅ Buttons */}
        <div
          ref={buttons.ref}
          className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-300 ${
            buttons.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Visit Us Button */}
          <a
            href={content.button1Link}
            className="bg-christmas-red text-white text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:bg-[#d62828]/90 cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-md"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {content.button1Text}
          </a>

          {/* Learn More Button */}
          <a
            href={content.button2Link}
            className="border-2 border-white bg-green-500/50 text-base sm:text-lg font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-green-500/70 cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-md"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {content.button2Text}
          </a>
        </div>
      </div>

      {/* 🌫️ Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-[#0b1221] pointer-events-none" />
    </section>
  );
}
