// src/cms/preview-templates/HeroPreview.jsx
export default ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  const html = `
    <section style="padding: 80px; text-align: center; background: url(${data.backgroundImage}) center/cover no-repeat;">
      <h1 style="font-size: 3rem; color: white;">${data.title || "Hero Title"}</h1>
      <p style="font-size: 1.25rem; color: white;">${data.text || "Hero text goes here..."}</p>
      <div style="margin-top: 1.5rem;">
        <a href="${data.button1Link || "#"}" style="background:red;color:white;padding:10px 16px;border-radius:6px;text-decoration:none;margin:0 6px;">
          ${data.button1Text || "Button 1"}
        </a>
        <a href="${data.button2Link || "#"}" style="background:green;color:white;padding:10px 16px;border-radius:6px;text-decoration:none;margin:0 6px;">
          ${data.button2Text || "Button 2"}
        </a>
      </div>
    </section>
  `;
  const el = document.createElement("div");
  el.innerHTML = html;
  return el;
};
