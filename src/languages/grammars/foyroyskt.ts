import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const foyroyskt = new Language(
  mergeGrammar({
    language: "foyroyskt",
    about:
      "ENIDE er ein umsettanligur transpiler sum loyvir forritning á hvat mál sum er",

    include: DocStr(
      "Feila",
      "Verður nýtt til at feila mál ella bókasøvn",
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
