// src/pages/OrderDetail.jsx

import { useParams, useNavigate } from "react-router-dom";
import { orders } from "../data/orders";
import NavBar from "../components/NavBar";

/**
 * OrderDetail
 *
 * Pagina di dettaglio dell’ordine:
 * - Colonna sinistra: informazioni cliente
 * - Colonna destra: elenco prodotti, subtotali, stato ordine
 *
 * Ho deciso di mantenere un layout a due colonne (responsive),
 * così da dare importanza sia al cliente che al contenuto dell’ordine.
 */

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // cerco l’ordine per id
  const order = orders.find((o) => o.id === parseInt(id));

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Ordine non trovato</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 to-stone-950 text-white flex flex-col">
      <NavBar />

      <main className="flex-1 p-8 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8">Dettaglio Ordine #{order.id}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonna sinistra: cliente */}
          <div className="md:col-span-1 bg-white/10 rounded-xl p-6 shadow-lg space-y-4">
            {/* Avatar con iniziale */}
            <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-xl">
              {order.cliente[0]}
            </div>

            <div>
              <h3 className="text-xl font-semibold">{order.cliente}</h3>
              <p className="text-gray-300 text-sm">📧 cliente{order.id}@mail.com</p>
              <p className="text-gray-300 text-sm">📞 +39 333 123456{order.id}</p>
              <p className="text-gray-300 text-sm">🏠 Via Roma {order.id}, Milano</p>
            </div>

            {/* Stato ordine */}
            <div className="mt-6">
              <p className="text-gray-400 text-sm">Stato ordine</p>
              <p
                className={`text-lg font-semibold ${
                  order.stato === "Completato"
                    ? "text-green-400"
                    : order.stato === "In lavorazione"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {order.stato}
              </p>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="mt-6 px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-500 transition"
            >
              ⬅ Torna indietro
            </button>
          </div>

          {/* Colonna destra: dettagli ordine */}
          <div className="md:col-span-2 bg-white/10 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Prodotti acquistati</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/10 text-sm">
                    <th className="px-4 py-2">Prodotto</th>
                    <th className="px-4 py-2 text-right">Quantità</th>
                    <th className="px-4 py-2 text-right">Prezzo unitario</th>
                    <th className="px-4 py-2 text-right">Totale</th>
                  </tr>
                </thead>
                <tbody>
                  {order.prodotti.map((p, idx) => (
                    <tr key={idx} className="border-b border-white/10 text-sm">
                      <td className="px-4 py-2">{p.nome}</td>
                      <td className="px-4 py-2 text-right">{p.quantità}</td>
                      <td className="px-4 py-2 text-right">
                        € {p.prezzoUnitario.toLocaleString()}
                      </td>
                      <td className="px-4 py-2 text-right">
                        € {(p.quantità * p.prezzoUnitario).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white/5 font-bold">
                    <td colSpan={3} className="px-4 py-2 text-right">
                      Totale ordine
                    </td>
                    <td className="px-4 py-2 text-right">
                      € {order.prezzo.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              Data ordine: {new Date(order.data).toLocaleDateString("it-IT")}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
