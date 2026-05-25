import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const kriolu = new Language(
  mergeGrammar({
    language: "kriolu",
    about:
      "ENIDE e un transpiler ki ta permiti fazi programason na kualker lingua",

    include: DocStr(
      "Kontein",
      "pa odja si testu kontem substring",
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
