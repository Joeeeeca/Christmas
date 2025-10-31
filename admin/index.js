import CMS from "decap-cms-app";
import HeroPreview from "/src/cms/preview-templates/HeroPreview.jsx";

// Register the Hero preview
CMS.registerPreviewTemplate("hero", HeroPreview);

// Inject your Tailwind CSS into the preview iframe
CMS.registerPreviewStyle("/dist/assets/index.css"); // Adjust path if your built CSS lives elsewhere