import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const chokwe = new Language(
  mergeGrammar({
    language: "chokwe",
    about:
      "ENIDE i transpilador wa kuhindulukilwa yoneka wa kuprograma mu ndimi yonse",

    include: DocStr(
      "Ikwima",
      "ku tala soku malembu ikwima mu malembu",
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
