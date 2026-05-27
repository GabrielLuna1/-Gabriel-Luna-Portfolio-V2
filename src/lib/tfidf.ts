import { QAEntry } from "@/data/case-knowledge/portfolio";
import { normalize, stemWord } from "@/lib/normalize";

const STOPWORDS = new Set([
  "de", "da", "do", "das", "dos", "em", "no", "na", "num", "numa",
  "para", "com", "por", "sem", "sob", "sobre", "entre",
  "um", "uma", "uns", "umas", "o", "a", "os", "as",
  "e", "que", "se", "ou", "mas", "nem", "pois",
  "voce", "como", "ja", "tem", "ter", "mais", "menos",
  "qual", "quais", "sao", "vai", "pode", "podem",
  "este", "esta", "estes", "estas", "essa", "esse", "esses", "essas",
  "isto", "isso", "aquele", "aquela", "aqueles", "aquelas",
  "fez", "faz", "fazer", "ser", "sendo", "sido",
  "foi", "era", "sou", "somos", "estou", "esta", "estamos",
  "dos", "das", "pelos", "pelas", "ao", "aos",
  "muito", "pouco", "todo", "toda", "todos", "todas",
  "cada", "algum", "alguma", "alguns", "algumas",
  "nenhum", "nenhuma",
  "pra", "pro", "pras", "pros",
]);

export class TfidfEngine {
  private documents: string[][] = [];
  private vocab: Set<string> = new Set();
  private idf: Map<string, number> = new Map();
  private qaEntries: QAEntry[] = [];
  private keywordSets: Set<string>[] = [];

  constructor(entries: QAEntry[]) {
    this.qaEntries = entries;
    this.buildIndex();
  }

  private tokenize(text: string): string[] {
    return normalize(text)
      .split(/\s+/)
      .map(stemWord)
      .filter((t) => t.length > 1 && !STOPWORDS.has(t));
  }

  private buildIndex(): void {
    for (const entry of this.qaEntries) {
      const qTokens = this.tokenize(entry.question);
      const kTokens = entry.keywords.flatMap((k) => this.tokenize(k));
      const allTokens = [...qTokens, ...kTokens];
      allTokens.forEach((t) => this.vocab.add(t));
      this.documents.push(qTokens);
      this.keywordSets.push(new Set(kTokens));
    }

    const N = this.documents.length;
    for (const term of this.vocab) {
      let df = 0;
      for (const doc of this.documents) {
        if (doc.includes(term)) df++;
      }
      this.idf.set(term, Math.log((N + 1) / (df + 1)) + 1);
    }
  }

  private tf(term: string, doc: string[]): number {
    const count = doc.filter((t) => t === term).length;
    return doc.length > 0 ? count / doc.length : 0;
  }

  public query(input: string): { entry: QAEntry; score: number }[] {
    const queryTokens = this.tokenize(input);
    if (queryTokens.length === 0) return [];

    const results: { entry: QAEntry; score: number }[] = [];

    for (let i = 0; i < this.qaEntries.length; i++) {
      const qTokens = this.documents[i];
      const kwSet = this.keywordSets[i];

      let tfidfScore = 0;
      let matchedCount = 0;

      for (const qt of queryTokens) {
        if (!this.vocab.has(qt)) continue;
        matchedCount++;
        const idfVal = this.idf.get(qt) || 0;
        const tfVal = this.tf(qt, qTokens);
        tfidfScore += tfVal * idfVal;
      }

      tfidfScore = matchedCount > 0 ? tfidfScore / matchedCount : 0;

      const querySet = new Set(queryTokens);
      let intersection = 0;
      for (const token of querySet) {
        if (kwSet.has(token)) intersection++;
      }
      const dice = (2 * intersection) / (querySet.size + kwSet.size);

      const score = tfidfScore * 0.4 + dice * 0.6;

      results.push({ entry: this.qaEntries[i], score });
    }

    results.sort((a, b) => b.score - a.score);
    return results.filter((r) => r.score > 0.15);
  }
}
