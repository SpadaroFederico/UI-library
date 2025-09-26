import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import { useState } from "react";

/**
 * Pagina di Supporto
 *
 * Layout:
 * - Sidebar sinistra: menu di navigazione + contatti rapidi (telefono, email, indirizzo)
 * - Contenuto principale a destra: FAQ, Ticket, Form contatto
 *
 * Design:
 * - Desktop → sidebar verticale fissa, contenuto largo a destra
 * - Mobile → sidebar si sposta in alto come blocco e il contenuto va sotto (colonna)
 *
 * Ho strutturato la pagina in modo che risulti utile e realistica:
 * - Le FAQ sono divise tra risposte e in attesa
 * - I ticket hanno stato visivo (aperto, in lavorazione, chiuso)
 * - È presente un form per inviare nuove richieste con conferma tramite modal
 * - Sidebar arricchita con contatti fittizi
 */

export default function Supporto() {
  const [showModal, setShowModal] = useState(false);

  // Stati per il form
  const [oggetto, setOggetto] = useState("");
  const [descrizione, setDescrizione] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset campi
    setOggetto("");
    setDescrizione("");

    // Mostra la modal di conferma
    setShowModal(true);
  };

  const faqs = [
    {
      id: 1,
      domanda: "Come posso resettare la mia password?",
      risposta:
        "Puoi resettarla dalla sezione 'Profilo' cliccando su 'Cambia password'.",
      stato: "risposto",
    },
    {
      id: 2,
      domanda: "Posso modificare o cancellare un ordine?",
      risposta: null,
      stato: "in attesa",
    },
    {
      id: 3,
      domanda: "È possibile avere una fattura personalizzata?",
      risposta:
        "Sì, puoi richiederla contattando l'amministrazione tramite email.",
      stato: "risposto",
    },
    {
      id: 4,
      domanda: "Come faccio a contattare il supporto clienti?",
      risposta: null,
      stato: "in attesa",
    },
  ];

  const tickets = [
    {
      id: 101,
      titolo: "Errore nel pagamento con carta",
      stato: "aperto",
      data: "20/09/2025",
    },
    {
      id: 102,
      titolo: "Problema con la fattura elettronica",
      stato: "in lavorazione",
      data: "18/09/2025",
    },
    {
      id: 103,
      titolo: "Richiesta personalizzazione ordine",
      stato: "chiuso",
      data: "15/09/2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 to-stone-950 text-white flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col md:flex-row p-6 md:p-8 gap-6 md:gap-8">
        {/* Sidebar sinistra */}
        <aside className="md:w-72 bg-white/10 rounded-xl p-6 shadow-md flex flex-col justify-between h-auto md:h-[calc(100vh-6rem)]">
          {/* Navigazione */}
          <div>
            <h3 className="text-lg font-bold mb-3">Supporto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#faq"
                  className="block px-3 py-2 rounded-lg hover:bg-violet-600/40 transition"
                >
                  📚 Domande frequenti
                </a>
              </li>
              <li>
                <a
                  href="#ticket"
                  className="block px-3 py-2 rounded-lg hover:bg-violet-600/40 transition"
                >
                  📨 Ticket aperti
                </a>
              </li>
              <li>
                <a
                  href="#contatta"
                  className="block px-3 py-2 rounded-lg hover:bg-violet-600/40 transition"
                >
                  ✍️ Contatta supporto
                </a>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div className="mt-6 border-t border-white/20 pt-4 text-sm space-y-2">
            <p className="font-semibold text-gray-200">📞 +39 0123 456789</p>
            <p className="font-semibold text-gray-200">📧 supporto@libraryui.it</p>
            <p className="text-gray-400">📍 Via Fittizia 123, Milano (MI)</p>
          </div>
        </aside>

        {/* Contenuto principale */}
        <div className="flex-1 space-y-12 overflow-y-auto">
          {/* FAQ */}
          <section id="faq">
            <h2 className="text-2xl font-bold mb-6">📚 Domande frequenti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white/10 rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform"
                >
                  <h4 className="font-semibold mb-2">{faq.domanda}</h4>
                  {faq.risposta ? (
                    <p className="text-gray-300 text-sm">{faq.risposta}</p>
                  ) : (
                    <p className="text-gray-500 italic text-sm">
                      Nessuna risposta ancora disponibile.
                    </p>
                  )}
                  <div className="mt-3">
                    {faq.stato === "risposto" ? (
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-300">
                        ✅ Risposto
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-300">
                        ⏳ In attesa
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ticket */}
          <section id="ticket">
            <h2 className="text-2xl font-bold mb-6">📩 Ticket aperti</h2>
            <div className="bg-white/10 rounded-xl shadow-md overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-sm">
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Titolo</th>
                    <th className="px-4 py-3">Data</th>
                    <th className="px-4 py-3 text-right">Stato</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t) => (
                    <tr
                      key={t.id}
                      className="border-b border-white/10 text-sm hover:bg-white/5"
                    >
                      <td className="px-4 py-3">{t.id}</td>
                      <td className="px-4 py-3">{t.titolo}</td>
                      <td className="px-4 py-3">{t.data}</td>
                      <td className="px-4 py-3 text-right">
                        {t.stato === "aperto" && (
                          <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs">
                            🔴 Aperto
                          </span>
                        )}
                        {t.stato === "in lavorazione" && (
                          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs">
                            🟡 In lavorazione
                          </span>
                        )}
                        {t.stato === "chiuso" && (
                          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">
                            🟢 Chiuso
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Form contatto */}
          <section id="contatta">
            <h2 className="text-2xl font-bold mb-6">✍️ Invia una nuova richiesta</h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 rounded-xl p-6 shadow-md space-y-4"
            >
              <input
                type="text"
                placeholder="Oggetto della richiesta"
                value={oggetto}
                onChange={(e) => setOggetto(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
                           focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
              <textarea
                placeholder="Descrivi il problema..."
                rows="4"
                value={descrizione}
                onChange={(e) => setDescrizione(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
                           focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
              <button
                type="submit"
                className="px-5 py-2 bg-gradient-to-r from-violet-600 to-green-400 
                           rounded-lg font-semibold hover:opacity-90 transition"
              >
                Invia
              </button>
            </form>
          </section>
        </div>
      </main>

      {/* Modal di conferma */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Richiesta inviata"
      >
        <p className="text-white">
          La tua richiesta è stata registrata. Ti ricontatteremo entro 24 ore.
        </p>
      </Modal>
    </div>
  );
}
