import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const tiengviet = new Language(
  mergeGrammar({
    language: "tiengviet",
    about:
      "ENIDE là một trình biên dịch nguồn sang nguồn có thể dịch được, cho phép lập trình bằng bất kỳ ngôn ngữ nào",

    include: DocStr(
      "CoChua",
      "để kiểm tra một chuỗi có chứa chuỗi con không",
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
