import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const hrvatski = new Language(
  mergeGrammar({
    language: "hrvatski",
    about:
      "ENIDE je poliglotski transpiler koji omogućuje programiranje na bilo kojem jeziku",

    include: DocStr(
      "Sadrzi",
      "za provjeru sadrži li tekst podniz",
    ),

    // Language-specific overrides (if any)
    // Example:
    // library: {
    //   __math: {
    //     main: DocStr("math", "..."),
    //   }
    // }
  }),
);
