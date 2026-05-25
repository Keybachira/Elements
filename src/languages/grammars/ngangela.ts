import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const ngangela = new Language(
  mergeGrammar({
    language: "ngangela",
    about:
      "ENIDE i transpilador wa kuhindulukilako yoneka wa kuprograma mu ndimi yonse",

    include: DocStr(
      "Conten",
      "ku tala soku malembu a kuta kima",
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
