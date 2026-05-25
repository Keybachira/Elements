import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const tigrinya = new Language(
  mergeGrammar({
    language: "tigrinya",
    about:
      "ENIDE bemananyawun quanquwa prwgiram lemagber yemiyakil transpiler eyu",

    include: DocStr(
      "Yilegnal",
      "qalt substring yizazal lemaregaget",
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
