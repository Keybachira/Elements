import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const kanuri = new Language(
  mergeGrammar({
    language: "kanuri",
    about:
      "ENIDE ye transpiler nze sarte du program karda fata ye",

    include: DocStr(
      "Də",
      "wante zara də substring ye",
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
