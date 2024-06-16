/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const anagram = (word: string, word2: string): boolean => {
  if (word === word2) return false;
  const normalize = (w: string) => w.toLowerCase().split("").sort().join("");
  return normalize(word) === normalize(word);
};

console.log("anita", "tania", anagram("anita", "tania"));
