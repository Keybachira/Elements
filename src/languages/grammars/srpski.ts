import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const srpski = new Language(
  mergeGrammar({
    language: "srpski",
    about:
      "ENIDE je prevodivi transpajler koji omogucava programiranje na bilo kom jeziku",

    include: DocStr(
      "Sadrzi",
      "provera da li niska sadrzi podniskov",
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
