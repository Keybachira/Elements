import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const tiv = new Language(
  mergeGrammar({
    language: "tiv",
    about:
      "ENIDE i transpiler sha wua ngu a ange yev program sha ityough ityough",

    include: DocStr(
      "Kohol",
      "Ka i gber i kohol zwa shin ukpandegh mbu mnger",
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
