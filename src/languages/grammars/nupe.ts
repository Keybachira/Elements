import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const nupe = new Language(
  mergeGrammar({
    language: "nupe",
    about:
      "ENIDE wo transpiler gbe wu eci program mu cibe nyonso",

    include: DocStr(
      "de_kime",
      "De gbolu de gbolu ndoci kime",
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
