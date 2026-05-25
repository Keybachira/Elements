import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const gaidhlig = new Language(
  mergeGrammar({
    language: "gaidhlig",
    about:
      "Is transpiler eadar-theangachail a tha ann an ENIDE a leigeas leat programadh ann an canan sam bith",

    include: DocStr(
      "include",
      "used to include language, libraries or data structure from another file",
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
