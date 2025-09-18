import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { users as seedUsers } from "../data/users"; // importo i dati mockati

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Stato locale inizializzato con gli utenti mockati
  const [users, setUsers] = useState(seedUsers);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isRegistering) {
      // Registrazione
      if (password !== confirmPassword) {
        setError("Le password non coincidono");
        return;
      }

      const exists = users.find((u) => u.email === email);
      if (exists) {
        setError("Email già registrata");
        return;
      }

      const newUser = { id: Date.now(), name, email, password };
      setUsers((prev) => [...prev, newUser]);

      setModalMessage("Registrazione completata con successo!");
      setShowModal(true);
    } else {
      // Login
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        setError("Credenziali non valide");
        return;
      }

      setModalMessage(`Bentornato, ${user.name || "utente"}!`);
      setShowModal(true);
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
      </div>

      {/* Modale di conferma */}
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          navigate("/"); // redirect dopo chiusura modale
        }}
        title="Operazione completata"
      >
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
}
