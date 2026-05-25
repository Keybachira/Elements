import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const bosanski = new Language(
  mergeGrammar({
    language: "bosanski",
    about:
      "ENIDE je prevodivi transpiler koji omogucava programiranje na bilo kojem jeziku",

    include: DocStr(
      "Sadrzi",
      "za provjeru sadrzi li niz podniz",
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
