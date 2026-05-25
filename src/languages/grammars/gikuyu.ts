import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const gikuyu = new Language(
  mergeGrammar({
    language: "gikuyu",
    about:
      "ENIDE ni transpiler yogaga ungihoorie program na rugano ruria rwose",

    include: DocStr(
      "Ina",
      "gwathia murigo una murigo mwingine ndani yake",
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
