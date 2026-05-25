import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const turkmen = new Language(
  mergeGrammar({
    language: "turkmen",
    about:
      "ENIDE islendik dilde programlamaga mumkincilik beryan terjime edilip bilinyan transpiler",

    include: DocStr(
      "Gosmak",
      "Dil ya-da kitaphanalary gosmak ucin ulanylyar",
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
