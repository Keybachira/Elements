import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const ewe = new Language(
  mergeGrammar({
    language: "ewe",
    about:
      "ENIDE nye transpiler si woate gake afedeka si na nu woawo nunoglo gbe siwo kata me",

    include: DocStr(
      "LiEme",
      "kpo be gbegble li gbegble bubu eme",
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
