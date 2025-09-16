import React from "react";

/**
 * Button component
 *
 * Un pulsante riutilizzabile con supporto per:
 * - dimensioni (size)
 * - colori (color)
 * - forme (shape)
 * - stato disabilitato o caricamento
 *
 * Tutti i bottoni condividono lo stesso gradient di base osservando anche l'attuale sito ho pensato che il gradient potrebbe piacere di più,
 * ho cercato di variare per dimensioni informandomi sull'utilizzo di diverse forme per offrire toni diversi a seconda del contesto, 
 * ad esempio più o meno professionale o più "futuristico"
 *
 * Nota: per il caricamento ho inserito due varianti:
 *  - una "creativa" con una zanzara 🦟, pensata richiamando il tema dell'azienda e sfruttando solo emoji 
 *    (dato che non è possibile usare librerie grafiche esterne).
 *  - una "classica" con spinner.
 */

// varianti di dimensioni
const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

// Varianti di colore
const colors = {
  primary: "from-purple-600 to-cyan-500 text-white",
  danger: "from-red-400 to-red-600 text-white",
  success: "from-green-400 to-green-600 text-white",
  warning: "from-yellow-400 to-orange-500 text-black",
};

// Varianti di forma 
const shapes = {
  default: "rounded-none", // squadrato, utilizzato principalmente per dare un tono professionale 
  rounded: "rounded-md",   // arrotondato leggero, più friendly come soluzione
  pill: "rounded-full",    // pill shape, playful per alleggerire principalmente
  skewed: "skew-x-12",     // inclinato, energico ho notato che viene spesso utilizzato per web app il cui punto di forza è il movimento
  cut: "[clip-path:polygon(0%_0%,calc(100%-12px)_0%,100%_12px,100%_100%,0%_100%)]", // angolo tagliato, prima volta che lo sperimento ma personalmnte mi sembra adatto sopratutto per esprimere concetti avanzamento nelle tecnologia
};

export default function Button({
  children,
  onClick,
  size = "md",
  color = "primary",
  shape = "default",
  disabled = false,
  loading = false,
  loadingType = "mosquito", // "mosquito" oppure "spinner"
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center font-medium 
        bg-gradient-to-r ${colors[color]} 
        ${sizes[size]} ${shapes[shape]} 
        transition-transform duration-200 ease-in-out
        shadow-md hover:shadow-lg
        ${disabled || loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"}
        ${className}
      `}
    >
      {/* Loading con zanzara */}
      {loading && loadingType === "mosquito" && (
        <span
          className="mr-2 inline-block animate-mosquito text-2xl opacity-100 transform -scale-x-100"
          role="img"
          aria-label="zanzara"
        >
          🦟
        </span>
      )}

      {/* Loading classico con spinner */}
      {loading && loadingType === "spinner" && (
        <span
          className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"
        ></span>
      )}

      {/* Se il pulsante è inclinato, correggo il testo per tenerlo dritto */}
      <span className={shape === "skewed" ? "-skew-x-12" : ""}>
        {children}
      </span>
    </button>
  );
}
