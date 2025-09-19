import React from "react";

/**
 * Button component
 *
 * Un pulsante riutilizzabile con:
 * - dimensioni (size)
 * - colori (color)
 * - stato disabilitato o caricamento
 *
 * Ho deciso di mantenere solo la variante con bordo tagliato (cut corner)
 * perché dà un tocco più tech/futuristico e rende i pulsanti unici rispetto
 * a quelli standard squadrati o arrotondati.
 *
 * Per l’hover del pulsante "primary" ho preferito non cambiare direttamente
 * il gradient (non si anima in modo fluido nei browser), ma fare un crossfade
 * tra due gradient sovrapposti. In questo modo il passaggio da viola→stone
 * a viola→verde è molto più morbido e piacevole.
 */

// Varianti di dimensioni (padding e font size)
const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

// Varianti di colore
// Nota: per "primary" gestiamo i gradient con i layer, qui serve solo il colore del testo
const colors = {
  primary: "text-white",
  danger: "from-red-400 to-red-600 text-white",
  success: "from-green-400 to-green-600 text-white",
  warning: "from-yellow-400 to-orange-500 text-black",
};

// Forma unica scelta: bordo tagliato
const shapeCut =
  "[clip-path:polygon(0%_0%,calc(100%-12px)_0%,100%_12px,100%_100%,0%_100%)]";

// Gradient per la variante "primary"
const primaryBase = "from-purple-700 to-stone-500";   // stato normale: viola→stone
const primaryHover = "from-purple-700 to-green-500";  // hover: viola→verde

export default function Button({
  children,
  onClick,
  size = "md",
  color = "primary",
  disabled = false,
  loading = false,
  loadingType = "mosquito", // "mosquito" | "spinner"
  className = "",
}) {
  const isInteractive = !(disabled || loading);

  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={!isInteractive}
      className={`
        group relative overflow-hidden inline-flex items-center justify-center font-medium
        ${sizes[size]} ${shapeCut}
        shadow-md hover:shadow-lg
        transition-all duration-300 ease-in-out
        ${isInteractive ? "hover:scale-[1.02] active:scale-[0.98]" : "opacity-70 cursor-not-allowed"}
        ${color !== "primary" ? `bg-gradient-to-r ${colors[color]}` : colors[color]}
        ${className}
      `}
    >
      {/* Gestione speciale per "primary" */}
      {color === "primary" && (
        <>
          <span
            className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${primaryBase} opacity-100 transition-opacity duration-300`}
          />
          <span
            className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${primaryHover} ${
              isInteractive ? "opacity-0 group-hover:opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          />
        </>
      )}

      {/* Contenuto sopra i layer */}
      <span className="relative z-10 flex items-center">
        {loading && loadingType === "mosquito" && (
          <span
            className="mr-2 inline-block animate-mosquito text-2xl opacity-100 transform -scale-x-100"
            role="img"
            aria-label="zanzara"
          >
            🦟
          </span>
        )}

        {loading && loadingType === "spinner" && (
          <span className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}

        {children}
      </span>
    </button>
  );
}
