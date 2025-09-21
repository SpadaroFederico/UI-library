import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

/**
 * Navbar
 *
 * Struttura:
 * - Logo a sinistra (LibraryUI → branding semplice e neutro)
 * - Link di navigazione centrali (desktop), compressi in un menu su mobile
 * - Profilo + Login/Logout a destra
 *
 * Design:
 * - Fissa (fixed) e trasparente con blur, per un look moderno tipico delle webapp.
 * - Responsive:
 *   → Desktop: link centrali ben visibili
 *   → Mobile: link nascosti, trasformati in menu a tendina
 *
 * Se l’utente è loggato:
 *  - Mostra avatar e pulsante Logout
 * Se non è loggato:
 *  - Mostra pulsante Login
 *
 * Per seguire la consegna non ho utilizzato librerie esterne (es. icone),
 * normalmente avrei usato un set come FontAwesome.
 */

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

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
          {/* Avatar utente */}
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

          {/* Se loggato → Logout, altrimenti → Login */}
          {currentUser ? (
            <Button size="sm" color="danger" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button size="sm" color="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu (sotto la navbar) */}
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
    </header>
  );
}
