import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const thai = new Language(
  mergeGrammar({
    language: "thai",
    about:
      "ENIDE kue tua plae phasa thi samat pla dai sueng chuay hai khian prokraem nai phasa dai ko dai",

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
