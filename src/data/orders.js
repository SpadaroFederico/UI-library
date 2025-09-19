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

export const orders = [
  { id: 1, cliente: "Mario Rossi", stato: "Completato", data: "15/09/2025", prezzo: 120 },
  { id: 2, cliente: "Anna Bianchi", stato: "In lavorazione", data: "14/09/2025", prezzo: 200 },
  { id: 3, cliente: "Luca Verdi", stato: "In attesa", data: "13/09/2025", prezzo: 80 },
  { id: 4, cliente: "Giulia Neri", stato: "Completato", data: "12/09/2025", prezzo: 150 },
  { id: 5, cliente: "Marco Gialli", stato: "Completato", data: "11/09/2025", prezzo: 300 },
];

