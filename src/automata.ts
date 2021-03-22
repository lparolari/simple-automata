// M = <Q, S, delta, q0, F>

// Automa su S = {0,1} che accetta stringhe composte opzionalmente
// da tanti 1, seguiti da almeno uno zero

// Definisco i tipi
type Stato = "q0" | "q1" | "q2"; // può essere "q0" oppure "q1" oppure "q2"
type Alfabeto = 0 | 1;
type Stringa = Alfabeto[];
type StatoIniziale = "q0";
type StatoFinale = "q1";

// Definisco le componenti dell'atuoma

// insieme di stati: ogni elemento dell'array può essere
// un valore del tipo Stato
export const Q: Stato[] = ["q0", "q1", "q2"];

// insieme di valori presi dal tipo Alfabeto
export const Sigma: Alfabeto[] = [0, 1];

// un valore preso dal tipo StatoIniziale, deve essere
// obbligatoriamente "q0": il tipo non supporta altri valori
export const q0: StatoIniziale = "q0";

// insieme di stati finali: ogni elemento dell'array può
// essere un valore del tipo StatoFinale
export const F: StatoFinale[] = ["q1"];

// delta (funzione di transizione):  Stato x Alfabeto --> Stato
//
// dato uno stato e un carattere ci dice in quale stato
// dobbiamo transire
export function delta(stato: Stato, simbolo: Alfabeto) {
  if (stato == "q0" && simbolo == 0) return "q1";
  if (stato == "q0" && simbolo == 1) return "q0";
  if (stato == "q1" && simbolo == 0) return "q1";
  if (stato == "q1" && simbolo == 1) return "q2";
  if (stato == "q2" && simbolo == 0) return "q2";
  if (stato == "q2" && simbolo == 1) return "q2";
}

// delta "cappuccio":  Stato x Stringa --> Stato
//
// dato uno stato ed una stringa effettua automaticamente
// le transizioni necessarie per mangiare tutta la stringa
// e restituisce uno stato
export function delta_c(stato: Stato, stringa: Stringa) {
  if (stringa.length == 0) return stato;

  const w = stringa.slice(0, stringa.length - 1);
  const a = stringa[stringa.length - 1];

  return delta(delta_c(stato, w), a);
}

// restituisce vero se la stringa è accettata partendo dallo
// stato iniziale, falso altrimenti
export function is_accettata(stringa: Stringa) {
  // calcolo lo stato di arrivo
  const q = delta_c(q0, stringa);

  // verifico che questo sia uno di quelli accettati
  for (const finale of F) {
    // se si, stringa accettata
    if (q == finale) return true;
  }
  // se no, stringa non accettata
  return false;
}
