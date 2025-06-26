// src/components/footer/SocialIcons.jsx
import React from "react";

function SocialIcons() {
  const icons = [
    {
      href: "mailto:info@mmsrepuestos.com",
      iconClass: "bi bi-envelope",
      label: "Email",
    },
    {
      href: "https://www.facebook.com/",
      iconClass: "bi bi-facebook",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/",
      iconClass: "bi bi-instagram",
      label: "Instagram",
    },
  ];

  return (
    <div className="iconos-redes d-flex flex-wrap align-items-center justify-content-center gap-3 py-3">
      {icons.map(({ href, iconClass, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white fs-4"
        >
          <i className={iconClass} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
