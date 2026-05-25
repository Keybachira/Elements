import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const farsi = new Language(
  mergeGrammar({
    language: "farsi",
    about:
      "ENIDE yek transpayler ghabele tarjome ast ke ejaze barname nevisi be har zabani ra midahad",

    include: DocStr(
      "Darad",
      "check kardan baraye vojoode zir-reshte",
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
