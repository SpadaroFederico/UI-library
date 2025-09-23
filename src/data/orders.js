// src/data/orders.js

/**
 * Mock ordini arricchiti
 *
 * - id univoco
 * - cliente
 * - stato (in corso, spedito, completato, annullato)
 * - data
 * - prezzo totale
 * - prodotti: array con { nome, quantità, prezzoUnitario }
 *
 * Questo formato permette di mostrare:
 * - tabelle semplificate (usando solo prezzo e stato)
 * - pagine di dettaglio più ricche con elenco prodotti
 */

export const orders = [
  {
    id: 1,
    cliente: "Mario Rossi",
    stato: "Completato",
    data: "2025-09-15",
    prezzo: 120,
    prodotti: [
      { nome: "Manuale di React", quantità: 1, prezzoUnitario: 45 },
      { nome: "Guida a TailwindCSS", quantità: 1, prezzoUnitario: 30 },
      { nome: "Licenza VSCode Pro", quantità: 1, prezzoUnitario: 45 },
    ],
  },
  {
    id: 2,
    cliente: "Anna Bianchi",
    stato: "In lavorazione",
    data: "2025-09-14",
    prezzo: 75,
    prodotti: [
      { nome: "Corso base HTML/CSS", quantità: 1, prezzoUnitario: 40 },
      { nome: "Manuale di Git", quantità: 1, prezzoUnitario: 35 },
    ],
  },
  {
    id: 3,
    cliente: "Luca Verdi",
    stato: "In attesa",
    data: "2025-09-13",
    prezzo: 200,
    prodotti: [
      { nome: "Abbonamento annuale Cloud Storage", quantità: 1, prezzoUnitario: 200 },
    ],
  },
  {
    id: 4,
    cliente: "Giulia Neri",
    stato: "Completato",
    data: "2025-09-12",
    prezzo: 50,
    prodotti: [
      { nome: "Ebook: JavaScript Moderno", quantità: 1, prezzoUnitario: 25 },
      { nome: "T-shirt Dev Edition", quantità: 1, prezzoUnitario: 25 },
    ],
  },
  {
    id: 5,
    cliente: "Paolo Gallo",
    stato: "Completato",
    data: "2025-09-11",
    prezzo: 180,
    prodotti: [
      { nome: "Monitor 24'' FullHD", quantità: 1, prezzoUnitario: 150 },
      { nome: "Mouse Wireless", quantità: 1, prezzoUnitario: 30 },
    ],
  },
  {
    id: 6,
    cliente: "Chiara Esposito",
    stato: "In lavorazione",
    data: "2025-09-10",
    prezzo: 95,
    prodotti: [
      { nome: "Auricolari Bluetooth", quantità: 1, prezzoUnitario: 60 },
      { nome: "Custodia Laptop", quantità: 1, prezzoUnitario: 35 },
    ],
  },
  {
    id: 7,
    cliente: "Alessio Conti",
    stato: "In attesa",
    data: "2025-09-09",
    prezzo: 130,
    prodotti: [
      { nome: "Tastiera Meccanica RGB", quantità: 1, prezzoUnitario: 130 },
    ],
  },
  {
    id: 8,
    cliente: "Sara Greco",
    stato: "Completato",
    data: "2025-09-08",
    prezzo: 220,
    prodotti: [
      { nome: "Tablet Android", quantità: 1, prezzoUnitario: 220 },
    ],
  },
  {
    id: 9,
    cliente: "Davide Romano",
    stato: "In lavorazione",
    data: "2025-09-07",
    prezzo: 60,
    prodotti: [
      { nome: "Zaino Porta-PC", quantità: 1, prezzoUnitario: 60 },
    ],
  },
  {
    id: 10,
    cliente: "Martina Fabbri",
    stato: "Completato",
    data: "2025-09-06",
    prezzo: 140,
    prodotti: [
      { nome: "Stampante Wireless", quantità: 1, prezzoUnitario: 140 },
    ],
  },
  {
    id: 11,
    cliente: "Stefano De Luca",
    stato: "In attesa",
    data: "2025-09-05",
    prezzo: 85,
    prodotti: [
      { nome: "Set Quaderni Smart", quantità: 1, prezzoUnitario: 40 },
      { nome: "Penna Digitale", quantità: 1, prezzoUnitario: 45 },
    ],
  },
  {
    id: 12,
    cliente: "Laura Marchetti",
    stato: "Completato",
    data: "2025-09-04",
    prezzo: 300,
    prodotti: [
      { nome: "Laptop Ultrabook", quantità: 1, prezzoUnitario: 300 },
    ],
  },
];