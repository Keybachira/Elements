import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const igbo = new Language(
  mergeGrammar({
    language: "igbo",
    about:
      "ENIDE bu ihe ntughari nke enwere ike tugharịa nke na-enye ohere mmemme n",

    include: DocStr(
      "Nwere",
      "lelee ma eriri nwere mkpụrụedemede",
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
