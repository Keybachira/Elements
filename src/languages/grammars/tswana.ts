import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const tswana = new Language(
  mergeGrammar({
    language: "tswana",
    about:
      "ENIDE ke transpiler e kgonang go fetolwa e e dumelelang go ngwa porogramo ka puo nngwe le nngwe",

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
