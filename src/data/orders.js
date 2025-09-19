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

export const orders = [
  {
    id: 1,
    cliente: "Mario Rossi",
    prodotto: "Monitor 27''",
    quantita: 2,
    stato: "Completato",
    data: "2025-09-01",
  },
  {
    id: 2,
    cliente: "Luca Bianchi",
    prodotto: "Laptop Pro 15''",
    quantita: 1,
    stato: "In corso",
    data: "2025-09-05",
  },
  {
    id: 3,
    cliente: "Giulia Verdi",
    prodotto: "Stampante Laser",
    quantita: 3,
    stato: "Spedito",
    data: "2025-09-07",
  },
  {
    id: 4,
    cliente: "Federico Neri",
    prodotto: "Smartphone X",
    quantita: 1,
    stato: "Annullato",
    data: "2025-09-08",
  },
  {
    id: 5,
    cliente: "Sara Blu",
    prodotto: "Tablet Mini",
    quantita: 2,
    stato: "Completato",
    data: "2025-09-10",
  },
  {
    id: 6,
    cliente: "Marco Gialli",
    prodotto: "Cuffie Wireless",
    quantita: 5,
    stato: "Spedito",
    data: "2025-09-12",
  },
  {
    id: 7,
    cliente: "Anna Rosa",
    prodotto: "Mouse Ergonomico",
    quantita: 4,
    stato: "In corso",
    data: "2025-09-14",
  },
  {
    id: 8,
    cliente: "Paolo Marrone",
    prodotto: "Tastiera Meccanica",
    quantita: 1,
    stato: "Completato",
    data: "2025-09-15",
  },
  {
    id: 9,
    cliente: "Chiara Argento",
    prodotto: "Webcam FullHD",
    quantita: 2,
    stato: "In corso",
    data: "2025-09-16",
  },
  {
    id: 10,
    cliente: "Davide Nero",
    prodotto: "SSD 1TB",
    quantita: 1,
    stato: "Spedito",
    data: "2025-09-17",
  },
];
