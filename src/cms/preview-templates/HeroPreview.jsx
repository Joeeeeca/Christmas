// src/cms/preview-templates/HeroPreview.jsx
import React from "react";

const HeroPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">{data.title || "Hero Title"}</h1>
        <p className="text-xl mb-6">{data.text || "Hero text goes here..."}</p>
        <div className="flex justify-center gap-4">
          <a
            href={data.button1Link || "#"}
            className="bg-red-600 px-4 py-2 rounded text-white font-semibold hover:bg-red-700"
          >
            {data.button1Text || "Button 1"}
          </a>
          <a
            href={data.button2Link || "#"}
            className="bg-green-600 px-4 py-2 rounded text-white font-semibold hover:bg-green-700"
          >
            {data.button2Text || "Button 2"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroPreview;
