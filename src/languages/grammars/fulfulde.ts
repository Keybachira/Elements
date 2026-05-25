import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const fulfulde = new Language(
  mergeGrammar({
    language: "fulfulde",
    about:
      "ENIDE woni transpiler moyyiniraaɗo ngo yaɓɓana kodde e kala hakkunde",

    include: DocStr(
      "Holti_Ɓuri",
      "ƴeewde so diwgol holti diwgol welnde",
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
