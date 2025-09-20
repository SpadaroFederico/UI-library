// src/pages/Orders.jsx
import { useState } from "react";
import { orders } from "../data/orders";
import NavBar from "../components/NavBar";

/**
 * Pagina Ordini
 *
 * Ho deciso di aggiungere una barra di ricerca per filtrare velocemente
 * gli ordini in base al nome del cliente. Questo rende la pagina più usabile
 * soprattutto quando la lista diventa lunga.
 */
export default function Orders() {
  const [search, setSearch] = useState("");

  // Filtra gli ordini in base al testo cercato
  const filteredOrders = orders.filter((order) =>
    order.cliente.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 to-stone-950 text-white flex flex-col">
      <NavBar />

      <main className="flex-1 p-8 space-y-8">
        <h2 className="text-3xl font-bold mb-6">Gestione Ordini</h2>

        {/* Barra di ricerca */}
        <div className="max-w-md mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cerca cliente..."
            className="w-full px-4 py-2 rounded-lg border border-white-300 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Tabella ordini */}
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
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => {
                  let color = "bg-gray-400";
                  if (order.stato === "Completato") color = "bg-green-500";
                  if (order.stato === "In lavorazione") color = "bg-yellow-500";
                  if (order.stato === "In attesa") color = "bg-violet-500";

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
                })
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-6 text-center text-gray-400">
                    Nessun ordine trovato
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
