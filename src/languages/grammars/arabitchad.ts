import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const arabitchad = new Language(
  mergeGrammar({
    language: "arabitchad",
    about:
      "ENIDE hu transpayler bi khali-k tusawi barmaja bi ay luga",

    include: DocStr(
      "Tadmin",
      "Mustamal li-taqrib al-lugha wala al-makatib",
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
