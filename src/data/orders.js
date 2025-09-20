// src/data/orders.js

/**
 * Mock ordini
 *
 * Ho scelto di creare un dataset di ordini realistici con:
 * - id univoco
 * - cliente (nome e cognome)
 * - prodotto
 * - quantità
 * - stato (in corso, spedito, completato, annullato)
 * - data
 *
 * Questi dati serviranno per popolare la tabella ordini e
 * calcolare statistiche nella dashboard.
 */

// data/orders.js

// src/data/orders.js

export const orders = [
  { id: 1, cliente: "Mario Rossi", stato: "Completato", data: "2025-09-15", prezzo: 120 },
  { id: 2, cliente: "Anna Bianchi", stato: "In lavorazione", data: "2025-09-14", prezzo: 75 },
  { id: 3, cliente: "Luca Verdi", stato: "In attesa", data: "2025-09-13", prezzo: 200 },
  { id: 4, cliente: "Giulia Neri", stato: "Completato", data: "2025-09-12", prezzo: 50 },
  { id: 5, cliente: "Paolo Gallo", stato: "Completato", data: "2025-09-11", prezzo: 180 },
  { id: 6, cliente: "Chiara Esposito", stato: "In lavorazione", data: "2025-09-10", prezzo: 95 },
  { id: 7, cliente: "Alessio Conti", stato: "In attesa", data: "2025-09-09", prezzo: 130 },
  { id: 8, cliente: "Sara Greco", stato: "Completato", data: "2025-09-08", prezzo: 220 },
  { id: 9, cliente: "Davide Romano", stato: "In lavorazione", data: "2025-09-07", prezzo: 60 },
  { id: 10, cliente: "Martina Fabbri", stato: "Completato", data: "2025-09-06", prezzo: 140 },
  { id: 11, cliente: "Stefano De Luca", stato: "In attesa", data: "2025-09-05", prezzo: 85 },
  { id: 12, cliente: "Laura Marchetti", stato: "Completato", data: "2025-09-04", prezzo: 300 },
];


