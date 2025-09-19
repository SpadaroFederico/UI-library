import React from "react";

/**
 * Card component
 *
 * Una card riutilizzabile con titolo, descrizione e click handler.
 * Supporta due varianti di stile:
 * - light → sfondo bianco con testo scuro
 * - dark → sfondo scuro con testo chiaro
 */
export default function Card({ title, description, onClick, variant = "dark" }) {
  const baseClasses =
    "cursor-pointer rounded-xl p-6 transition shadow-md hover:shadow-lg";

  const variants = {
    light: "bg-white text-gray-800 hover:bg-gray-50",
    dark: "bg-gray-900 text-white hover:bg-gray-800",
  };

  return (
    <div onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
