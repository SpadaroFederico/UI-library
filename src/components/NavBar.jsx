import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";

/**
 * Navbar
 *
 * Struttura:
 * - Logo a sinistra
 * - Link centrali (desktop), compressi in un menu su mobile
 * - Profilo + Login/Logout a destra
 *
 * Modal:
 * - La conferma di logout ora usa la Modal (con portal).
 */

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="w-full bg-black/30 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl font-extrabold text-white hover:text-violet-400 transition"
        >
          Library<span className="text-green-500">UI</span>
        </div>

        {/* Link centrali (desktop) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6">
          {[
            { label: "Home", path: "/" },
            { label: "Ordini", path: "/orders" },
            { label: "Dashboard", path: "/dashboard" },
            { label: "Supporto", path: "/support" },
          ].map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-white 
                         hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500 
                         transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Profilo + Login/Logout */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          {currentUser ? (
            <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white font-semibold">
              {currentUser.name
                ? currentUser.name[0].toUpperCase()
                : currentUser.email[0].toUpperCase()}
            </div>
          ) : (
            <div className="w-9 h-9 rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold">
              ?
            </div>
          )}

          {/* Pulsante */}
          {currentUser ? (
            <Button size="sm" color="danger" onClick={() => setIsModalOpen(true)}>
              Logout
            </Button>
          ) : (
            <Button size="sm" color="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div className="flex md:hidden justify-center bg-black/40 backdrop-blur-md">
        {[
          { label: "Home", path: "/" },
          { label: "Ordini", path: "/orders" },
          { label: "Dashboard", path: "/dashboard" },
          { label: "Supporto", path: "/support" },
        ].map((link) => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className="px-3 py-2 text-sm text-white hover:text-violet-400 transition"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Modal Logout */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Sei sicuro di voler uscire?"
      >
      </Modal>
    </header>
  );
}
