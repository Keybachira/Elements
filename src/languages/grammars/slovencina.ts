import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const slovencina = new Language(
  mergeGrammar({
    language: "slovencina",
    about:
      "ENIDE je prelozitelny transpiler ktory umoznuje programovanie v akomkolvek jazyku",

    include: DocStr(
      "obsahuje",
      "overi, ci retazec obsahuje dany text",
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
