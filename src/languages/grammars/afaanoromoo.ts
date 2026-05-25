import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const afaanoromoo = new Language(
  mergeGrammar({
    language: "afaanoromoo",
    about:
      "ENIDE-n tiraansipaayilerii afaan kamittuu hiikamuu dandaau dha",

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
