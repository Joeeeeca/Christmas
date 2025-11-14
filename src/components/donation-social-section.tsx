"use client";

import { useState, useEffect } from "react";
import { Heart, Facebook, Sparkles } from "lucide-react";
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll";
import { FairyLights } from "./fairy-lights";
import { Helmet } from "react-helmet-async";
import donationData from "@/content/donation.json"; // CMS data

export default function DonationSocialSection() {
  const [donationError, setDonationError] = useState(false);
  const [facebookLoaded, setFacebookLoaded] = useState(false);

  // Load SociableKIT script
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widgets.sociablekit.com/facebook-page-posts/widget.js";
    script.defer = true;
    script.onload = () => setFacebookLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const title = useFadeInOnScroll();
  const donationCard = useFadeInOnScroll();
  const facebookCard = useFadeInOnScroll();

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <Helmet>
        <title>{donationData.title} | Highfield Road Christmas Lights 🎄</title>
      </Helmet>

      <div className="absolute top-0 left-0 w-full z-10">
        <FairyLights />
      </div>

      <div className="container mx-auto max-w-6xl relative z-20">
        {/* Title */}
        <div
          ref={title.ref}
          className={`flex flex-col items-center transition-all duration-700 ${
            title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-center">
            <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
            <h2 className="text-4xl font-bold text-white">
              {donationData.title}
            </h2>
            <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          {/* ❤️ Donation Card */}
          <div
            ref={donationCard.ref}
            className={`rounded-2xl p-6 bg-slate-800/60 backdrop-blur-lg border border-red-500/30 transition-all duration-700 ${
              donationCard.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-red-400" />
              <h3 className="text-2xl font-bold text-white">
                {donationData.donationTitle}
              </h3>
            </div>
            <p className="text-slate-300 mb-6">
              {donationData.donationText}
            </p>

            <div className="relative h-[400px] rounded-xl overflow-hidden border border-red-500/30">
              {donationError ? (
                <a
                  href={donationData.donationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/donation-amount.jpg"
                    alt="GoFundMe fallback"
                    className="w-full h-full object-cover"
                  />
                </a>
              ) : (
                <iframe
                  src={donationData.donationUrl}
                  className="w-full h-full"
                  title="GoFundMe Widget"
                  onError={() => setDonationError(true)}
                />
              )}
            </div>
          </div>

          {/* 💙 Facebook Updates */}
          <div
            ref={facebookCard.ref}
            className={`rounded-2xl p-6 bg-slate-800/60 backdrop-blur-lg border border-blue-500/30 transition-all duration-700 ${
              facebookCard.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Facebook className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Latest Updates</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Follow our Facebook page for the latest news and photos from the display.
            </p>

            {/* Fallback until SociableKIT widget loads */}
            {!facebookLoaded ? (
              <a
                href={donationData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/facebook-preview.png"
                  alt="Facebook preview"
                  className="w-full rounded-xl"
                />
              </a>
            ) : (
              <div className="w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25622068"
                  frameBorder="0"
                  style={{
                    width: "100%",
                    height: "1000px",
                    border: "none",
                  }}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
