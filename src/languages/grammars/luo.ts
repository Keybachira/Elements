import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const luo = new Language(
  mergeGrammar({
    language: "luo",
    about:
      "ENIDE en transpiler ma nyalo lokore kendo miyo nyalo ndiko kódigo e dhok duto",

    include: DocStr(
      "Nitiere",
      "nonro ka wach nitiere e i wach machielo",
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
