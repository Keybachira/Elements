import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const teke = new Language(
  mergeGrammar({
    language: "teke",
    about:
      "ENIDE i transpiler ngo sili program na lolo nge biani",

    include: DocStr(
      "Nkolo_Mo",
      "tene nkolo mo nkolo weni",
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
