import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const turkce = new Language(
  mergeGrammar({
    language: "turkce",
    about:
      "ENIDE herhangi bir dilde programlamaya izin veren tercüme edilebilir bir transpiler",

    include: DocStr(
      "İçeriyor",
      "bir metnin alt metin içerip içermediğini kontrol etmek için",
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
