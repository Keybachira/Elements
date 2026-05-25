import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const emakhuwa = new Language(
  mergeGrammar({
    language: "emakhuwa",
    about:
      "ENIDE tiri nkalasetero ootaphuleeya onalipihererya opurokerama ni nttaava ni na nnene",

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
