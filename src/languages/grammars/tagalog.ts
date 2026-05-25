import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const tagalog = new Language(
  mergeGrammar({
    language: "tagalog",
    about:
      "Ang ENIDE ay isang transpilador na maaaring isalin na nagbibigay-daan sa pagprograma sa anumang wika",

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
