import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const galego = new Language(
  mergeGrammar({
    language: "galego",
    about:
      "ENIDE é un transpilador traducible que permite programar en calquera lingua",

    include: DocStr(
      "Incluír",
      "Úsase para incluír linguaxes ou bibliotecas",
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
