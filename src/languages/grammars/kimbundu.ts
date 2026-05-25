import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const kimbundu = new Language(
  mergeGrammar({
    language: "kimbundu",
    about:
      "ENIDE i transpilador ya kuhindulukilanga yoneka ya kuprograma mu ndimi yonso",

    include: DocStr(
      "Kuna",
      "ku tala soki malembo kuna substring",
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
