import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const fon = new Language(
  mergeGrammar({
    language: "fon",
    about:
      "ENIDE nyo transpiler e no sixu sen bo na do hlonhlon nu kodu do gbe bi me",

    include: DocStr(
      "Ɖo_Mɛ",
      "kpo bo mo do nudidi ɖo nudidi bubu mɛ",
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
