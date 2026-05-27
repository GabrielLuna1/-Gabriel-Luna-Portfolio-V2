const ACCENT_MAP: Record<string, string> = {
  á: "a", à: "a", â: "a", ã: "a", ä: "a",
  é: "e", è: "e", ê: "e", ë: "e",
  í: "i", ì: "i", î: "i", ï: "i",
  ó: "o", ò: "o", ô: "o", õ: "o", ö: "o",
  ú: "u", ù: "u", û: "u", ü: "u",
  ç: "c", ñ: "n",
};

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[áàâãäéèêëíìîïóòôõöúùûüçñ]/g, (ch) => ACCENT_MAP[ch] || ch)
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

export function stemWord(word: string): string {
  if (word.length <= 3) return word;
  if (word.endsWith("ss")) return word;
  if (word.endsWith("ns")) return word.slice(0, -1);
  if (word.endsWith("oes")) return word.replace(/oes$/, "ao");
  if (word.endsWith("aes")) return word.replace(/aes$/, "ao");
  if (word.endsWith("s")) return word.slice(0, -1);
  return word;
}
