import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

export default function Home() {
  const navigate = useNavigate();

  const mockOrders = [
    { id: 1, cliente: "Mario Rossi", stato: "Completato", data: "15/09/2025" },
    { id: 2, cliente: "Anna Bianchi", stato: "In lavorazione", data: "14/09/2025" },
    { id: 3, cliente: "Luca Verdi", stato: "In attesa", data: "13/09/2025" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 to-stone-950 text-white flex flex-col">
      <NavBar />

      <main className="flex-1 p-8 space-y-12">
        {/* Hero */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-3">Benvenuto nella piattaforma LibraryUI</h2>
          <p className="text-gray-300 mb-6">
            Qui puoi gestire i tuoi ordini, monitorare i dati e contattare il supporto.
          </p>
          <Button onClick={() => navigate("/dashboard")}>
            Vai alla Dashboard
          </Button>
        </section>

        {/* Statistiche rapide */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Statistiche rapide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 shadow-md">
              <p className="text-gray-400 text-sm">Ordini totali</p>
              <p className="text-2xl font-bold">124</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 shadow-md">
              <p className="text-gray-400 text-sm">Clienti attivi</p>
              <p className="text-2xl font-bold">56</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 shadow-md">
              <p className="text-gray-400 text-sm">Ticket aperti</p>
              <p className="text-2xl font-bold">7</p>
            </div>
          </div>
        </section>

        {/* Ultimi ordini */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Ultimi ordini</h3>
          <div className="overflow-x-auto bg-white/10 rounded-xl shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/10">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Cliente</th>
                  <th className="px-4 py-2">Stato</th>
                  <th className="px-4 py-2">Data</th>
                </tr>
              </thead>
              <tbody>
                {mockOrders.map((order) => (
                  <tr key={order.id} className="border-b border-white/10">
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.cliente}</td>
                    <td className="px-4 py-2">{order.stato}</td>
                    <td className="px-4 py-2">{order.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Annunci */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Annunci</h3>
          <div className="bg-white/10 rounded-xl p-6 shadow-md space-y-4">
            <div>
              <h4 className="font-semibold">Nuova funzionalità disponibile</h4>
              <p className="text-gray-300 text-sm">
                Abbiamo introdotto la possibilità di esportare i dati degli ordini in formato Excel.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Manutenzione programmata</h4>
              <p className="text-gray-300 text-sm">
                Il sistema non sarà disponibile domenica dalle 22:00 alle 24:00 per manutenzione.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md px-6 py-4 text-center text-gray-400 text-sm">
        © 2025 LibraryUI.
      </footer>
    </div>
  );
}
