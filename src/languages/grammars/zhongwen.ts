import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const zhongwen = new Language(
  mergeGrammar({
    language: "zhongwen",
    about:
      "ENIDE shi yige ke fanyi de yuan daima zhuanhuangi, yingxu shiyong rhenhe yuyan biancheng",

    include: DocStr(
      "BaoHan",
      "Yong yu bao han yu yan huo ku",
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
