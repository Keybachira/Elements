/**
 * EXAMPLE: English Grammar with Merge System
 * 
 * This shows how language files should be updated to use the merge system.
 * Instead of defining everything, just override the language-specific translations.
 * 
 * Benefits:
 * ✅ When BASE_GRAMMAR is updated, English automatically inherits changes
 * ✅ Much shorter language files (300 lines → 50 lines)
 * ✅ Consistent across all languages
 * ✅ Easy to add new features globally
 * 
 * HOW TO USE THIS:
 * 1. Replace your language files with this pattern
 * 2. Delete the old duplicated definitions
 * 3. Keep only language-specific translations
 */

import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const english = new Language(
  mergeGrammar({
    language: "english",
    about:
      "ENIDE is a polyglot transpiler that allows programming in any language",

    include: DocStr(
      "include",
      "used to include language, libraries or data structure from another file",
    ),

    // Optional: Override specific translations for this language
    // Example - if you want to use different keywords for a specific library:
    // library: {
    //   __math: {
    //     main: DocStr("mathematics", "access math functions"),
    //   }
    // }
  }),
);
