import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const cymraeg = new Language(
  mergeGrammar({
    language: "cymraeg",
    about:
      "Mae ENIDE yn drawsbeilydd trosglwyddadwy sy",

    include: DocStr(
      "YnCynnwys",
      "i wirio a yw llinyn yn cynnwys isllinyn",
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
