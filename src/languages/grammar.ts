import lang from "./grammar.import.js";
import { Language } from "./grammar.class.js";
import { LanguageGrammar } from "./grammar.interface.js";

export function Grammer(Languages: string): LanguageGrammar | null {
  const language = Object.values(lang as Record<string, Language>).find(
    (l) => l.grammar().language === Languages.toLowerCase(),
  );
  return language ? language.grammar() : null;
}
