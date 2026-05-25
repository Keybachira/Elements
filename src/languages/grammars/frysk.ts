import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const frysk = new Language(
  mergeGrammar({
    language: "frysk",
    about:
      "ENIDE is in oersettbere transpiler dy",

    include: DocStr(
      "Ynfoegje",
      "Brûkt om taal of biblioteken ta te foegjen",
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
