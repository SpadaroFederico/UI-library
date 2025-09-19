import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import { orders } from "../data/orders";

export default function Home() {
  const navigate = useNavigate();

  // Calcoli rapidi
  const totalOrders = orders.length;
  const totalRevenue = orders
    .filter((o) => o.stato === "Completato")
    .reduce((sum, o) => sum + o.prezzo, 0);

  const countByStatus = orders.reduce((acc, o) => {
    acc[o.stato] = (acc[o.stato] || 0) + 1;
    return acc;
  }, {});

  // Stato per animazioni
  const [animatedPercentages, setAnimatedPercentages] = useState({});
  const [animatedRevenue, setAnimatedRevenue] = useState(0);

  useEffect(() => {
    // animazione grafico
    const timer = setTimeout(() => {
      const percentages = {};
      Object.entries(countByStatus).forEach(([stato, count]) => {
        percentages[stato] = Math.round((count / totalOrders) * 100);
      });
      setAnimatedPercentages(percentages);
    }, 300);

    // animazione bilancio
    let start = 0;
    const step = totalRevenue / 50; // 50 step per l’animazione
    const interval = setInterval(() => {
      start += step;
      if (start >= totalRevenue) {
        clearInterval(interval);
        setAnimatedRevenue(totalRevenue);
      } else {
        setAnimatedRevenue(Math.floor(start));
      }
    }, 30);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [totalOrders, totalRevenue]);

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

        {/* Bilancio */}
        <section>
          <div className="bg-gradient-to-r from-green-600 to-violet-600 
                          rounded-xl shadow-xl p-8 text-center 
                          max-w-md mx-auto backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-2">Bilancio Totale</h3>
            <p className="text-4xl font-bold">
              € {animatedRevenue.toLocaleString("it-IT")}
            </p>
          </div>
        </section>

        {/* Statistiche rapide + grafico */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Statistiche rapide</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Blocchi numerici a sinistra */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-6 shadow-md">
                <p className="text-gray-400 text-sm">Ordini totali</p>
                <p className="text-2xl font-bold">{totalOrders}</p>
              </div>
              {Object.entries(countByStatus).map(([stato, count]) => (
                <div key={stato} className="bg-white/10 rounded-xl p-6 shadow-md">
                  <p className="text-gray-400 text-sm">{stato}</p>
                  <p className="text-2xl font-bold">{count}</p>
                </div>
              ))}
            </div>

            {/* Grafico a barre a destra */}
            <div className="bg-white/10 rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-semibold mb-4">Distribuzione ordini</h4>
              <div className="space-y-3">
                {Object.entries(countByStatus).map(([stato]) => {
                  const percent = animatedPercentages[stato] || 0;
                  return (
                    <div key={stato}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{stato}</span>
                        <span>{percent}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded h-3 overflow-hidden">
                        <div
                          className="h-3 rounded bg-gradient-to-r from-violet-600 to-green-500 transition-all duration-1000"
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
                  <th className="px-4 py-2">Prezzo</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  let color = "bg-gray-400"; // default
                  if (order.stato === "Completato") color = "bg-green-500";
                  if (order.stato === "In lavorazione") color = "bg-yellow-500";
                  if (order.stato === "In attesa") color = "bg-red-500";

                  return (
                    <tr key={order.id} className="border-b border-white/10">
                      <td className="px-4 py-2">{order.id}</td>
                      <td className="px-4 py-2">{order.cliente}</td>
                      <td className="px-4 py-2 flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${color}`} />
                        {order.stato}
                      </td>
                      <td className="px-4 py-2">{order.data}</td>
                      <td className="px-4 py-2">€ {order.prezzo}</td>
                    </tr>
                  );
                })}
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
