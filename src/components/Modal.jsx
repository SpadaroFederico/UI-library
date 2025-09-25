import React from "react";
import ReactDOM from "react-dom";

/**
 * Modal
 *
 * Versione aggiornata:
 * - Sfondo più scuro (bg-gray-900) → maggiore leggibilità.
 * - Testo chiaro (text-gray-100).
 * - Struttura più vicina a una "dialog box" classica:
 *   → Titolo in alto
 *   → Contenuto testuale al centro
 *   → Azioni allineate in basso a destra
 *
 * Manteniamo React Portal per evitare problemi di posizionamento.
 */

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center 
        bg-black/60 backdrop-blur-sm
        animate-[overlayIn_0.3s_ease-out]
      "
    >
      <div
        className="
          relative bg-gray-900 text-gray-100 rounded-xl shadow-2xl p-6 w-full max-w-md
          border border-violet-500/30
          animate-[modalIn_0.4s_ease-out]
        "
      >
        {/* Titolo */}
        <h2 className="text-lg font-bold mb-4">{title}</h2>

        {/* Contenuto */}
        <div className="mb-6">{children}</div>

        {/* Azioni (in basso a destra) */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition"
          >
            Annulla
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 transition text-white"
          >
            Conferma
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
