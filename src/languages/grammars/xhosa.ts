import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const xhosa = new Language(
  mergeGrammar({
    language: "xhosa",
    about:
      "ENIDE yikhompayila ehumusha evumela ukuphrogramwa ngoluphi na ulwimi",

    include: DocStr(
      "Inayo",
      "ukuhlola ukuba umbhalo unento ethile",
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
