import { createContext, useContext, useState } from "react";
import { initialUsers } from "../data/users";

/**
 * AuthContext
 *
 * Per una questione di presentabilità ho preferito usare un context globale
 * invece di tenere la logica solo nella pagina di Login:
 * - Evito prop drilling (niente props passati manualmente ovunque)
 * - Centralizzo la gestione di login/logout/registrazione
 *
 * Funzioni incluse:
 * - login
 * - register
 * - loginAsGuest
 * - logout
 *
 * currentUser contiene sempre lo stato dell’utente attuale.
 */

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Stato con utenti mockati + eventuali nuovi registrati
  const [users, setUsers] = useState(initialUsers);

  // Utente attualmente loggato
  const [currentUser, setCurrentUser] = useState(null);

  // Funzione di login
  const login = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) throw new Error("Credenziali non valide");
    setCurrentUser(user);
  };

  // Funzione di registrazione
  const register = (name, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      throw new Error("Le password non coincidono");
    }
    const exists = users.find((u) => u.email === email);
    if (exists) {
      throw new Error("Email già registrata");
    }
    const newUser = { id: Date.now(), name, email, password };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  };

  const loginAsGuest = () => {
  const guestUser = {
    id: "guest",
    name: "Ospite",
    email: "guest@demo.it",
  };
  setCurrentUser(guestUser);
  };

  // Funzione di logout
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ users, currentUser, login, register, logout, loginAsGuest }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizzato per usare più facilmente il context
export function useAuth() {
  return useContext(AuthContext);
}
