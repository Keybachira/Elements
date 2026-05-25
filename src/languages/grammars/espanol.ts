import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const espanol = new Language(
  mergeGrammar({
    language: "espanol",
    about:
      "ENIDE es un transpilador traducible que permite programar en cualquier idioma",

    include: DocStr(
      "Incluir",
      "Se utiliza para incluir lenguajes o bibliotecas",
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
