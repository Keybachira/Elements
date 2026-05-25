import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const umbundu = new Language(
  mergeGrammar({
    language: "umbundu",
    about:
      "ENIDE i transpilador uo kuhindulukilako yoneka yo kuprograma mu ndimi yosi",

    include: DocStr(
      "OkukapaMo",
      "Ci lingiwa oku kapa mo elimi ale o mambululyu",
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
