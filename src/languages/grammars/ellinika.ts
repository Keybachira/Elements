import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const ellinika = new Language(
  mergeGrammar({
    language: "ellinika",
    about:
      "To ENIDE einai enas metafrastikos metaplittis pou epitrepei ton programmatismo se opoiadipote glossa",

    include: DocStr(
      "include",
      "used to include language, libraries or data structure from another file",
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
