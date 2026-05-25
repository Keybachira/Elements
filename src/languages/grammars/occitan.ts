import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const occitan = new Language(
  mergeGrammar({
    language: "occitan",
    about:
      "ENIDE es un transpilador traducible que permet de programar en quina que siá lenga",

    include: DocStr(
      "contèn",
      "verifica se la cadena contèn una soscadena",
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
