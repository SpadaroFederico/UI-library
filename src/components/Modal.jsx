import React from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center 
        bg-gradient-to-br from-violet-900/40 to-stone-900/40 
        backdrop-blur-sm 
        animate-[overlayIn_0.4s_ease-out]
      "
    >
      <div
        className="
          relative bg-white rounded-xl shadow-xl p-6 w-full max-w-md
          border border-violet-400/30
          animate-[modalIn_0.5s_ease-out]
        "
      >
        {/* Bordo gradient sottile e animato */}
        <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-green-500 animate-[borderFlow_4s_linear_infinite]">
          <div className="w-full h-full bg-white rounded-xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-lg font-bold mb-4">{title}</h2>
          <div className="mb-6">{children}</div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}
