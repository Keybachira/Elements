import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const sango = new Language(
  mergeGrammar({
    language: "sango",
    about:
      "ENIDE zo transpiler ngu a fa program na yeke zo biani",

    include: DocStr(
      "na_be",
      "a tala soki mbeto a yeke na moko kete mbeto",
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
