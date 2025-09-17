import React from "react";

/**
 * Input component
 *
 * Campo di input riutilizzabile con supporto per:
 * - label opzionale
 * - dimensioni (size)
 * - placeholder
 * - messaggio di errore
 * - stato disabilitato
 *
 * Ho mantenuto lo stesso approccio usato per i Button:
 * - dimensioni coerenti (sm, md, lg)
 * - gradient come accento quando l'input è attivo
 * - possibilità di aggiungere un messaggio di errore per migliorare la UX
 * - ho preferito rimanere su uno stile semplice trattandosi di input, cambiando solo il focus
 */

// Varianti di dimensioni
const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

export default function Input({
  label,
  placeholder = "",
  size = "md",
  type = "text",
  error = "",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Label opzionale */}
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {/* Campo di input */}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full rounded-md border
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
          ${sizes[size]}
          ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "border-gray-300"}
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />

      {/* Messaggio di errore */}
      {error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}
