import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const wolof = new Language(
  mergeGrammar({
    language: "wolof",
    about:
      "ENIDE moy un transpiler bu dem ay laaj ci kenn ci benn ci dekk bi",

    include: DocStr(
      "AmNa",
      "xool bu xare bi am na mbind mi",
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
