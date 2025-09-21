import NavBar from "../components/NavBar";

/**
 * Dashboard
 *
 * Ho deciso di organizzare la dashboard in due blocchi principali:
 * - Un grafico a barre personalizzato (senza librerie esterne) che mostra
 *   l’andamento settimanale. Ho scelto di far crescere le barre con un’animazione
 *   per dare più dinamicità e rendere la pagina viva.
 * - Una tabella comparativa annuale (2024 vs 2025) che permette di valutare
 *   rapidamente variazioni mese per mese.
 *
 * Questo mix di visuale + tabellare rende i dati più leggibili e professionali.
 */

export default function Dashboard() {
  // Dati mock per il grafico (giorni della settimana)
  const data = [
    { label: "L", value: 120 },
    { label: "M", value: 90 },
    { label: "Me", value: 150 }, // ho usato "Me" per distinguere da Martedì
    { label: "G", value: 80 },
    { label: "V", value: 200 },
    { label: "S", value: 170 },
    { label: "D", value: 140 },
  ];

  // Calcolo il valore massimo per proporzionare le barre
  const maxValue = Math.max(...data.map((d) => d.value));
  const CHART_HEIGHT = 180; // altezza massima del grafico in px

  // Dati mock per la tabella comparativa (2024 vs 2025)
  const rows = [
    { mese: "Gennaio", y1: 2346, y2: 3452 },
    { mese: "Febbraio", y1: 1800, y2: 2100 },
    { mese: "Marzo", y1: 2200, y2: 2500 },
    { mese: "Aprile", y1: 2400, y2: 2300 },
    { mese: "Maggio", y1: 2600, y2: 2800 },
    { mese: "Giugno", y1: 2000, y2: 2600 },
    { mese: "Luglio", y1: 2100, y2: 1900 },
    { mese: "Agosto", y1: 1500, y2: 1300 },
    { mese: "Settembre", y1: 1900, y2: 2400 },
    { mese: "Ottobre", y1: 2300, y2: 2600 },
    { mese: "Novembre", y1: 2500, y2: 2700 },
    { mese: "Dicembre", y1: 2800, y2: 3000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 to-stone-950 text-white flex flex-col">
      <NavBar />

      <main className="flex-1 p-8 space-y-12">
        {/* Titolo introduttivo */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-3">Dashboard</h2>
          <p className="text-gray-300">
            Qui puoi monitorare le performance dei tuoi ordini e confrontare i dati.
          </p>
        </section>

        {/* Grafico con animazione */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">Andamento settimanale</h3>
          <div className="bg-white/10 rounded-xl p-6 shadow-md">
            <div
              className="flex items-end justify-between gap-6"
              style={{ height: CHART_HEIGHT + 40 }}
            >
              {data.map((d, idx) => {
                const barHeight = Math.max(
                  4, // garantisco sempre un minimo (anche se il valore è molto basso)
                  Math.round((d.value / maxValue) * CHART_HEIGHT)
                );

                return (
                  <div key={idx} className="flex flex-col items-center flex-1">
                    {/* Numero sopra la barra */}
                    <div className="mb-3 text-xs text-gray-200">{d.value}</div>

                    {/* Barra animata (parte da 0 e cresce fino al valore) */}
                    <div
                      className="rounded-md bg-gradient-to-t from-violet-600 to-green-400"
                      style={{
                        height: 0,
                        width: 8,
                        transition: "height 1s ease-out",
                        animation: `growBar-${idx} 1s ease-out forwards`,
                      }}
                    />

                    {/* Etichetta sotto (giorno della settimana) */}
                    <div className="mt-2 text-xs">{d.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Genero dinamicamente le animazioni per ogni barra */}
          <style>
            {data
              .map((d, idx) => {
                const barHeight = Math.max(
                  4,
                  Math.round((d.value / maxValue) * CHART_HEIGHT)
                );
                return `
                  @keyframes growBar-${idx} {
                    from { height: 0; }
                    to { height: ${barHeight}px; }
                  }
                `;
              })
              .join("\n")}
          </style>
        </section>

        {/* Tabella comparativa annuale */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">Comparazione annuale</h3>
          <div className="overflow-x-auto bg-white/10 rounded-xl shadow-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10 text-sm">
                  <th className="px-4 py-2">Mese</th>
                  <th className="px-4 py-2 text-right">2024</th>
                  <th className="px-4 py-2 text-right">2025</th>
                  <th className="px-4 py-2 text-right">Variazione</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  const diff = ((row.y2 - row.y1) / row.y1) * 100;
                  return (
                    <tr key={row.mese} className="border-b border-white/10 text-sm">
                      <td className="px-4 py-2">{row.mese}</td>
                      <td className="px-4 py-2 text-right">€{row.y1.toLocaleString()}</td>
                      <td className="px-4 py-2 text-right">€{row.y2.toLocaleString()}</td>
                      <td
                        className={`px-4 py-2 text-right font-semibold ${
                          diff >= 0 ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {diff.toFixed(1)}%
                      </td>
                    </tr>
                  );
                })}
                {/* Riga finale: totali */}
                <tr className="bg-white/5 font-bold">
                  <td className="px-4 py-2">Totale</td>
                  <td className="px-4 py-2 text-right">
                    €
                    {rows.reduce((a, b) => a + b.y1, 0).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-right">
                    €
                    {rows.reduce((a, b) => a + b.y2, 0).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-right">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
