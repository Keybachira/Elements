import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const kikongo = new Language(
  mergeGrammar({
    language: "kikongo",
    about:
      "ENIDE i transpilador ya kulukumanisa yoneka ya kuprograma mu ndimi yonso",

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
