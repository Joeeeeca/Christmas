// Custom preview templates for Decap CMS
// This makes the preview look like the actual website

// Import necessary modules
import CMS from "decap-cms"
import createClass from "create-react-class"
import h from "react-hyperscript"

// Register preview styles from your main site
CMS.registerPreviewStyle("/globals.css")

// Hero Section Preview Template
const HeroPreview = createClass({
  render() {
    const entry = this.props.entry
    const title = entry.getIn(["data", "title"])
    const text = entry.getIn(["data", "text"])
    const backgroundImage = entry.getIn(["data", "backgroundImage"])

    return h(
      "div",
      {
        style: {
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
      },
      h("div", {
        style: {
          position: "absolute",
          inset: "0",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(4px)",
        },
      }),
      h(
        "div",
        {
          style: {
            position: "relative",
            zIndex: "10",
            textAlign: "center",
            color: "white",
            padding: "2rem",
          },
        },
        h(
          "h1",
          {
            style: {
              fontSize: "4rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            },
          },
          title,
        ),
        h(
          "p",
          {
            style: {
              fontSize: "1.5rem",
              marginBottom: "2rem",
              maxWidth: "800px",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            },
          },
          text,
        ),
      ),
    )
  },
})

// About Section Preview Template
const AboutPreview = createClass({
  render() {
    const entry = this.props.entry
    const introduction = entry.getIn(["data", "introduction"])
    const why = entry.getIn(["data", "why"])
    const displayDescription = entry.getIn(["data", "displayDescription"])

    return h(
      "section",
      {
        style: {
          padding: "4rem 2rem",
          background: "linear-gradient(180deg, #0f172a 0%, #1e3a5f 100%)",
          color: "white",
        },
      },
      h(
        "div",
        {
          style: {
            maxWidth: "1200px",
            margin: "0 auto",
          },
        },
        h(
          "h2",
          {
            style: {
              fontSize: "3rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#fbbf24",
            },
          },
          "About Our Display",
        ),
        h(
          "div",
          {
            style: {
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "1fr",
            },
          },
          h(
            "div",
            {
              style: {
                background: "rgba(30, 58, 95, 0.8)",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #fbbf24",
              },
            },
            h(
              "h3",
              {
                style: {
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                  color: "#fbbf24",
                },
              },
              "Hi, I'm [Your Name]!",
            ),
            h(
              "p",
              {
                style: {
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                },
              },
              introduction,
            ),
          ),
          h(
            "div",
            {
              style: {
                background: "rgba(30, 58, 95, 0.8)",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #fbbf24",
              },
            },
            h(
              "h3",
              {
                style: {
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                  color: "#fbbf24",
                },
              },
              "Why We Do This",
            ),
            h(
              "p",
              {
                style: {
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                },
              },
              why,
            ),
          ),
          h(
            "div",
            {
              style: {
                background: "rgba(30, 58, 95, 0.8)",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #fbbf24",
              },
            },
            h(
              "h3",
              {
                style: {
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                  color: "#fbbf24",
                },
              },
              "The Display",
            ),
            h(
              "p",
              {
                style: {
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                },
              },
              displayDescription,
            ),
          ),
        ),
      ),
    )
  },
})

// Visit Section Preview Template
const VisitPreview = createClass({
  render() {
    const entry = this.props.entry
    const address = entry.getIn(["data", "address"])
    const googleMapsUrl = entry.getIn(["data", "googleMapsUrl"])

    return h(
      "section",
      {
        style: {
          padding: "4rem 2rem",
          background: "linear-gradient(180deg, #1e3a5f 0%, #0f172a 100%)",
          color: "white",
        },
      },
      h(
        "div",
        {
          style: {
            maxWidth: "1200px",
            margin: "0 auto",
          },
        },
        h(
          "h2",
          {
            style: {
              fontSize: "3rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#fbbf24",
            },
          },
          "Visit Us",
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              alignItems: "center",
            },
          },
          h(
            "div",
            {
              style: {
                fontSize: "1.3rem",
                padding: "2rem",
                background: "rgba(30, 58, 95, 0.8)",
                borderRadius: "12px",
                border: "2px solid #fbbf24",
              },
            },
            h(
              "p",
              {
                style: {
                  fontWeight: "bold",
                  marginBottom: "1rem",
                },
              },
              "Address:",
            ),
            h("p", {}, address),
            h(
              "a",
              {
                href: googleMapsUrl,
                style: {
                  color: "#fbbf24",
                  marginTop: "1rem",
                  display: "inline-block",
                },
              },
              "Get Directions →",
            ),
          ),
        ),
      ),
    )
  },
})

// Gallery Preview Template
const GalleryPreview = createClass({
  render() {
    const entry = this.props.entry
    const title = entry.getIn(["data", "title"])
    const image = entry.getIn(["data", "image"])

    return h(
      "div",
      {
        style: {
          background: "rgba(30, 58, 95, 0.8)",
          borderRadius: "12px",
          border: "2px solid #fbbf24",
          overflow: "hidden",
          transition: "transform 0.3s ease",
        },
      },
      h("img", {
        src: image,
        alt: title,
        style: {
          width: "100%",
          height: "300px",
          objectFit: "cover",
        },
      }),
      h(
        "div",
        {
          style: {
            padding: "1rem",
            color: "white",
            textAlign: "center",
          },
        },
        h(
          "p",
          {
            style: {
              fontSize: "1.1rem",
              fontWeight: "600",
            },
          },
          title,
        ),
      ),
    )
  },
})

// Social Links Preview Template
const SocialPreview = createClass({
  render() {
    const entry = this.props.entry
    const facebookUrl = entry.getIn(["data", "facebookUrl"])
    const justGivingUrl = entry.getIn(["data", "justGivingUrl"])

    return h(
      "section",
      {
        style: {
          padding: "4rem 2rem",
          background: "linear-gradient(180deg, #0f172a 0%, #1e3a5f 100%)",
          color: "white",
        },
      },
      h(
        "div",
        {
          style: {
            maxWidth: "1200px",
            margin: "0 auto",
          },
        },
        h(
          "h2",
          {
            style: {
              fontSize: "3rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#fbbf24",
            },
          },
          "Stay Connected",
        ),
        h(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            },
          },
          h(
            "div",
            {
              style: {
                background: "rgba(30, 58, 95, 0.8)",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #dc2626",
                textAlign: "center",
              },
            },
            h(
              "h3",
              {
                style: {
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                  color: "#fbbf24",
                },
              },
              "Support Our Cause",
            ),
            h(
              "a",
              {
                href: justGivingUrl,
                style: {
                  display: "inline-block",
                  padding: "1rem 2rem",
                  background: "#dc2626",
                  color: "white",
                  borderRadius: "8px",
                  textDecoration: "none",
                  marginTop: "1rem",
                },
              },
              "Donate on JustGiving",
            ),
          ),
          h(
            "div",
            {
              style: {
                background: "rgba(30, 58, 95, 0.8)",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #1877f2",
                textAlign: "center",
              },
            },
            h(
              "h3",
              {
                style: {
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                  color: "#fbbf24",
                },
              },
              "Follow Us on Facebook",
            ),
            h(
              "a",
              {
                href: facebookUrl,
                style: {
                  display: "inline-block",
                  padding: "1rem 2rem",
                  background: "#1877f2",
                  color: "white",
                  borderRadius: "8px",
                  textDecoration: "none",
                  marginTop: "1rem",
                },
              },
              "Visit Our Facebook Page",
            ),
          ),
        ),
      ),
    )
  },
})

// Register all preview templates
CMS.registerPreviewTemplate("hero", HeroPreview)
CMS.registerPreviewTemplate("about", AboutPreview)
CMS.registerPreviewTemplate("visit", VisitPreview)
CMS.registerPreviewTemplate("gallery", GalleryPreview)
CMS.registerPreviewTemplate("social", SocialPreview)
