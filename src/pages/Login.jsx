import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import Modal from "../components/Modal";

/**
 * Login / Register page
 *
 * Struttura:
 * - Card centrale con gradient di sfondo
 * - Switch dinamico tra modalità "Login" e "Registrazione"
 * - Validazioni di base (password uguali, email non duplicata)
 * - Modale di conferma all'operazione riuscita
 *
 * Scelte:
 * - Ho gestito utenti mockati tramite AuthContext, per simulare un flusso realistico.
 * - Ho aggiunto anche un accesso "ospite" per mostrare flessibilità.
 * - La modale conferma l’operazione e crea un feedback positivo.
 */

export default function Login() {
  const { login, register, loginAsGuest } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isRegistering) {
        register(name, email, password, confirmPassword);
        setModalMessage("Registrazione completata con successo!");
      } else {
        login(email, password);
        setModalMessage("Login effettuato con successo!");
      }
      setShowModal(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-900 to-stone-950">
      <div className="bg-gray-200 rounded-xl shadow-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {isRegistering ? "Crea un account" : "Accedi"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegistering && (
            <Input
              label="Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Inserisci il tuo nome"
            />
          )}

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Inserisci la tua email"
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Inserisci la tua password"
          />

          {isRegistering && (
            <Input
              label="Conferma Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Ripeti la password"
            />
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button color="primary" size="md" className="w-full">
            {isRegistering ? "Registrati" : "Login"}
          </Button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          {isRegistering ? (
            <>
              Hai già un account?{" "}
              <button
                type="button"
                onClick={() => setIsRegistering(false)}
                className="text-purple-600 hover:underline"
              >
                Accedi
              </button>
            </>
          ) : (
            <>
              Non hai un account?{" "}
              <button
                type="button"
                onClick={() => setIsRegistering(true)}
                className="text-purple-600 hover:underline"
              >
                Registrati
              </button>
            </>
          )}
        </p>
        
        {/* Link per accedere come ospite */}
        <p className="text-sm text-gray-500 text-center mt-2">
          Oppure{" "}
          <button
            type="button"
            onClick={() => {
              loginAsGuest(); // segna l’utente guest
              navigate("/"); // vai in Home
            }}
            className="text-green-600 hover:underline"
          >
            entra come ospite
          </button>
        </p>
      </div>

      

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          navigate("/"); // redirect dopo conferma
        }}
        title="Operazione completata"
      >
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
}
