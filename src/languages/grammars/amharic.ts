import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const amharic = new Language(
  mergeGrammar({
    language: "amharic",
    about:
      "ENIDE bemananyawum quanquwa prwgiram lemadreg yemiyachil transpiler new",

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
