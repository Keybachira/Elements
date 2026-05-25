import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const gonja = new Language(
  mergeGrammar({
    language: "gonja",
    about:
      "ENIDE nye transpiler be din di program yelma be yelma pam",

    include: DocStr(
      "Kpam_Ŋun",
      "ni nyeli kpam ŋun kpam weni",
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
