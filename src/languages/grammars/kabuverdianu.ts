import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const kabuverdianu = new Language(
  mergeGrammar({
    language: "kabuverdianu",
    about:
      "ENIDE e un transpiler traduzivel ki permiti programason na kalker lingua",

    include: DocStr(
      "Kontem",
      "pa verifica si kadeia kontem substring",
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
