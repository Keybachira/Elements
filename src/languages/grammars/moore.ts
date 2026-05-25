import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const moore = new Language(
  mergeGrammar({
    language: "moore",
    about:
      "ENIDE yaa transpiler sen seglg ta ne tigs boole faa puge",

    include: DocStr(
      "Paasgo",
      "Tuumd n paas buud-gomd walla sebr-roogo",
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
