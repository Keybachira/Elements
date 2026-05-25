import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const kriol = new Language(
  mergeGrammar({
    language: "kriol",
    about:
      "ENIDE i un transpiler traduzivel ki permiti programason na kualker lingua",

    include: DocStr(
      "Inklui",
      "pa verifica si testu tene substring",
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
