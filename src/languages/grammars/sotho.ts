import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const sotho = new Language(
  mergeGrammar({
    language: "sotho",
    about:
      "ENIDE ke transpiler e kgonang ho fetoha e dumellang ho ngola programo ka puo efe kapa efe",

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
