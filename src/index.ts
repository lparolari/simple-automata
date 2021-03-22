import { is_accettata } from "./automata";

// Automa su S = {0,1} che accetta stringhe composte opzionalmente
// da tanti 1, seguiti da almeno uno zero

console.log(is_accettata([])); // false
console.log(is_accettata([0])); // true
console.log(is_accettata([0, 0, 0, 0, 0])); // true
console.log(is_accettata([1, 1, 1, 0, 0])); // true
console.log(is_accettata([1, 1, 1])); // false
console.log(is_accettata([0, 0, 1, 1, 1])); // false
