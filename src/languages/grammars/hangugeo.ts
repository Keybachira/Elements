import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const hangugeo = new Language(
  mergeGrammar({
    language: "hangugeo",
    about:
      "ENIDE-neun eotteon eon-eoro-deun ppeurogeuraeming-eul hal su itge haejuneun beon-yeok ganeunghan teuraenseupa-illeo-imnida",

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
