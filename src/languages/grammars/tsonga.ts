import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const tsonga = new Language(
  mergeGrammar({
    language: "tsonga",
    about:
      "ENIDE i transpiler leri nga hundzuliwa leri pfumelaka ku tsala program hi rito rihani",

    include: DocStr(
      "Katsa",
      "Swi tirhisiwa ku katsa ririmi kumbe tilayiburari",
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
