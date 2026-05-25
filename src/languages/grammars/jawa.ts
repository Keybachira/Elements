import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const jawa = new Language(
  mergeGrammar({
    language: "jawa",
    about:
      "ENIDE iku transpiler sing bisa diterjemahake kang ngidini pemrograman ing basa apa wae",

    include: DocStr(
      "Nglebokake",
      "Digunakake kanggo nglebokake basa, perpustakaan, utawa struktur saka file liyane",
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
