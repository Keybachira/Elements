import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const melayu = new Language(
  mergeGrammar({
    language: "melayu",
    about:
      "ENIDE ialah transpiler boleh terjemah yang membolehkan pengaturcaraan dalam mana-mana bahasa",

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
