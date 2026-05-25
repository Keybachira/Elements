import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const zulu = new Language(
  mergeGrammar({
    language: "zulu",
    about:
      "ENIDE iyikhompayila ehumusha evumela ukuphrogramwa nganoma iluphi ulimi",

    include: DocStr(
      "Faka",
      "Kusetshenziswa ukufaka ulimi noma imitapo yolwazi",
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
