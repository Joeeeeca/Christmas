import CMS from "decap-cms";
import createClass from "create-react-class";
import h from "react-hyperscript";

// ✅ Import your custom previews
import "./preview.js";

// Example: if you want your global styles applied in preview
CMS.registerPreviewStyle("/globals.css");
