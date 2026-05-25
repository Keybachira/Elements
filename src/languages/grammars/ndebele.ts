import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const ndebele = new Language(
  mergeGrammar({
    language: "ndebele",
    about:
      "ENIDE iyikhompayila eguqulwayo evumela ukuphrograma nganoma yiluphi ulimi",

    include: DocStr(
      "Iqukethe",
      "Ukuhlola ukuthi intambo iqukethe umbhalo",
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
