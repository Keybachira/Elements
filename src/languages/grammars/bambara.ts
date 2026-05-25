import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const bambara = new Language(
  mergeGrammar({
    language: "bambara",
    about:
      "ENIDE ye transpiler wolomanba ye min bɛ se ka dan ka baara kɛ kan o kan na",

    include: DocStr(
      "BɛKono",
      "ka lajɛ ni sira kɔnɔ sira dɔ bɛ",
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
