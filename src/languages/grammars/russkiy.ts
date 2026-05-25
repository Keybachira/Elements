import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const russkiy = new Language(
  mergeGrammar({
    language: "russkiy",
    about:
      "ENIDE - eto perevodimyy transpayler, pozvolyayushchiy programmirovat na lyubom yazyke",

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
