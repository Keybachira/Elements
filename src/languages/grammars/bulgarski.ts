import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const bulgarski = new Language(
  mergeGrammar({
    language: "bulgarski",
    about:
      "ENIDE e prevodim transpiler, koito pozvoliava programirane na vsiakakuv ezik",

    include: DocStr(
      "Sudurzha",
      "proverka dali nizut sudurzha podniz",
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
