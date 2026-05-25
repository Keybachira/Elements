import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const alarabiyyah = new Language(
  mergeGrammar({
    language: "alarabiyyah",
    about:
      "ENIDE huwa mutarjim fawri qabil lil-tarjamah yasmah bil-barmajah bi-ayyi lughah",

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
