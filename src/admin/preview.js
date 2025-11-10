import CMS from "decap-cms";
import React from "react";

CMS.registerPreviewStyle("/globals.css");

// ✅ Hero Section Preview
const HeroPreview = ({ entry }) => {
  const title = entry.getIn(["data", "title"]);
  const text = entry.getIn(["data", "text"]);
  const backgroundImage = entry.getIn(["data", "backgroundImage"]);

  return (
    <div
      style={{
        position: "relative",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(4px)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          color: "white",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            maxWidth: "800px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

// ✅ About Section Preview
const AboutPreview = ({ entry }) => {
  const introduction = entry.getIn(["data", "introduction"]);
  const why = entry.getIn(["data", "why"]);
  const displayDescription = entry.getIn(["data", "displayDescription"]);

  return (
    <section
      style={{
        padding: "4rem 2rem",
        background: "linear-gradient(180deg, #0f172a 0%, #1e3a5f 100%)",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#fbbf24",
          }}
        >
          About Our Display
        </h2>
        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "1fr" }}>
          <div
            style={{
              background: "rgba(30, 58, 95, 0.8)",
              padding: "2rem",
              borderRadius: "12px",
              border: "2px solid #fbbf24",
            }}
          >
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#fbbf24" }}>
              Hi, I'm [Your Name]!
            </h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>{introduction}</p>
          </div>

          <div
            style={{
              background: "rgba(30, 58, 95, 0.8)",
              padding: "2rem",
              borderRadius: "12px",
              border: "2px solid #fbbf24",
            }}
          >
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#fbbf24" }}>
              Why We Do This
            </h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>{why}</p>
          </div>

          <div
            style={{
              background: "rgba(30, 58, 95, 0.8)",
              padding: "2rem",
              borderRadius: "12px",
              border: "2px solid #fbbf24",
            }}
          >
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#fbbf24" }}>
              The Display
            </h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>{displayDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Visit Section Preview
const VisitPreview = ({ entry }) => {
  const address = entry.getIn(["data", "address"]);
  const googleMapsUrl = entry.getIn(["data", "googleMapsUrl"]);

  return (
    <section
      style={{
        padding: "4rem 2rem",
        background: "linear-gradient(180deg, #1e3a5f 0%, #0f172a 100%)",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#fbbf24",
          }}
        >
          Visit Us
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "1.3rem",
              padding: "2rem",
              background: "rgba(30, 58, 95, 0.8)",
              borderRadius: "12px",
              border: "2px solid #fbbf24",
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>Address:</p>
            <p>{address}</p>
            <a
              href={googleMapsUrl}
              style={{
                color: "#fbbf24",
                marginTop: "1rem",
                display: "inline-block",
              }}
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Gallery Preview
const GalleryPreview = ({ entry }) => {
  const title = entry.getIn(["data", "title"]);
  const image = entry.getIn(["data", "image"]);

  return (
    <div
      style={{
        background: "rgba(30, 58, 95, 0.8)",
        borderRadius: "12px",
        border: "2px solid #fbbf24",
        overflow: "hidden",
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          padding: "1rem",
          color: "white",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>{title}</p>
      </div>
    </div>
  );
};

// ✅ Social Section Preview
const SocialPreview = ({ entry }) => {
  const facebookUrl = entry.getIn(["data", "facebookUrl"]);
  const justGivingUrl = entry.getIn(["data", "justGivingUrl"]);

  return (
    <section
      style={{
        padding: "4rem 2rem",
        background: "linear-gradient(180deg, #0f172a 0%, #1e3a5f 100%)",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#fbbf24",
          }}
        >
          Stay Connected
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          <div
            style={{
              background: "rgba(30, 58, 95, 0.8)",
              padding: "2rem",
              borderRadius: "12px",
              border: "2px solid #dc2626",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "1rem",
                color: "#fbbf24",
              }}
            >
              Support Our Cause
            </h3>
            <a
              href={justGivingUrl}
              style={{
                display: "inline-block",
                padding: "1rem 2rem",
                background: "#dc2626",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
                marginTop: "1rem",
              }}
            >
              Donate on JustGiving
            </a>
          </div>

          <div
            style={{
              background: "rgba(30, 58, 95, 0.8)",
              padding: "2rem",
              borderRadius: "12px",
              border: "2px solid #1877f2",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "1rem",
                color: "#fbbf24",
              }}
            >
              Follow Us on Facebook
            </h3>
            <a
              href={facebookUrl}
              style={{
                display: "inline-block",
                padding: "1rem 2rem",
                background: "#1877f2",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
                marginTop: "1rem",
              }}
            >
              Visit Our Facebook Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Register all templates
CMS.registerPreviewTemplate("hero", HeroPreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("visit", VisitPreview);
CMS.registerPreviewTemplate("gallery", GalleryPreview);
CMS.registerPreviewTemplate("social", SocialPreview);
