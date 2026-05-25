import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const yoruba = new Language(
  mergeGrammar({
    language: "yoruba",
    about:
      "ENIDE je oluyipada ti o le tumasi ti o gba laaye eto ni ede eyikeyi",

    include: DocStr(
      "NiNinu",
      "se ayewo boya okun ni oro kan ninu",
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
