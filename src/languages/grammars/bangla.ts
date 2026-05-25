import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const bangla = new Language(
  mergeGrammar({
    language: "bangla",
    about:
      "ENIDE holo ekti onubad-joggo transpiler ja jekono bhashay programming korar sujog dey",

    include: DocStr(
      "AcheKi",
      "string-e kono substring ache ki na dekhte",
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
