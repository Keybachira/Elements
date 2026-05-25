import { LanguageGrammar } from "./grammar.interface.js";
import { BASE_GRAMMAR } from "./grammar.base.js";

/**
 * MERGE STRATEGY
 * Combines BASE_GRAMMAR (universal structure) with language-specific translations.
 * 
 * How it works:
 * 1. Provide a language-specific config with translations
 * 2. mergeGrammar() combines it with the base structure
 * 3. All languages automatically inherit base improvements
 */

interface LanguageTranslations {
  language: string;
  about: string;
  include: {
    main: string;
    __description: string;
  };
  // Override only specific parts if needed
  library?: Record<string, any>;
  commands?: Record<string, any>;
  types?: Record<string, any>;
  methods?: Record<string, any>;
  errors?: Record<string, any>;
}

/**
 * Deep merge objects recursively
 */
function deepMerge<T extends Record<string, any>>(base: T, override: Record<string, any>): T {
  const result = { ...base };

  for (const key in override) {
    if (override.hasOwnProperty(key)) {
      const baseValue = result[key];
      const overrideValue = override[key];

      if (
        baseValue &&
        typeof baseValue === "object" &&
        !Array.isArray(baseValue) &&
        overrideValue &&
        typeof overrideValue === "object" &&
        !Array.isArray(overrideValue)
      ) {
        result[key] = deepMerge(baseValue, overrideValue);
      } else {
        result[key] = overrideValue;
      }
    }
  }

  return result;
}

/**
 * Merge language-specific translations with base grammar
 * 
 * Example:
 * ```ts
 * const englishGrammar = mergeGrammar({
 *   language: "english",
 *   about: "ENIDE is a polyglot transpiler...",
 *   include: { main: "include", __description: "..." },
 *   // Override specific parts if needed
 *   // library: { __math: { ... } }
 * });
 * ```
 */
export function mergeGrammar(translations: LanguageTranslations): LanguageGrammar {
  const merged: LanguageGrammar = {
    language: translations.language,
    about: translations.about,
    include: translations.include,
    commands: deepMerge(BASE_GRAMMAR.commands, translations.commands || {}),
    library: deepMerge(BASE_GRAMMAR.library, translations.library || {}),
    types: deepMerge(BASE_GRAMMAR.types, translations.types || {}),
    words: deepMerge(BASE_GRAMMAR.words, translations.words || {}),
    specialValues: deepMerge(BASE_GRAMMAR.specialValues, translations.specialValues || {}),
    accessModifiers: deepMerge(BASE_GRAMMAR.accessModifiers, translations.accessModifiers || {}),
    methods: deepMerge(BASE_GRAMMAR.methods, translations.methods || {}),
    errors: deepMerge(BASE_GRAMMAR.errors, translations.errors || {}),
    example: deepMerge(BASE_GRAMMAR.example, translations.example || {}),
  };

  return merged;
}

/**
 * Create a base grammar template for a language file
 * This function helps create new language files quickly
 */
export function createLanguageTemplate(
  language: string,
  about: string,
  overrides?: Partial<LanguageTranslations>
): LanguageGrammar {
  return mergeGrammar({
    language,
    about,
    include: {
      main: "include",
      __description: "used to include language, libraries or data structure from another file",
    },
    ...overrides,
  });
}
