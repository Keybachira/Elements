/**
 * DEBUG SCRIPT 2
 * Test Language class to see if it's processing merged grammar correctly
 */

import { Language } from "./src/languages/grammar.class.js";
import { mergeGrammar } from "./src/languages/grammar.merge.js";
import { DocStr } from "./src/languages/utils/stucture.grammar.js";

console.log("🔍 Testing Language class...\n");

// Create a Language instance with merged grammar
const merged = mergeGrammar({
  language: "english",
  about: "Test",
  include: DocStr("include", "test"),
});

console.log("✓ Merged grammar created");
console.log(`  - Has __file: ${!!merged.library.__file}`);
console.log(`  - Has __http: ${!!merged.library.__http}`);

// Create Language instance
const lang = new Language(merged);
console.log("\n✓ Language instance created");

// Get the grammar from Language
const grammar = lang.grammar();
console.log("\n✓ Language.grammar() called");
console.log(`  - Language: ${grammar.language}`);
console.log(`  - Has library object: ${!!grammar.library}`);
console.log(`  - Library keys: ${Object.keys(grammar.library).join(", ")}`);

// Check for new libraries
console.log("\n✓ Checking new libraries in Language.grammar():");
console.log(`  - Has __file: ${!!grammar.library.__file}`);
console.log(`  - Has __http: ${!!grammar.library.__http}`);
console.log(`  - Has __json: ${!!grammar.library.__json}`);
console.log(`  - Has __array_ops: ${!!grammar.library.__array_ops}`);
console.log(`  - Has __object_ops: ${!!grammar.library.__object_ops}`);
console.log(`  - Has __crypto: ${!!grammar.library.__crypto}`);
console.log(`  - Has __stream: ${!!grammar.library.__stream}`);
console.log(`  - Has __logger: ${!!grammar.library.__logger}`);

// Check the structure of __file
if (grammar.library.__file) {
  console.log("\n✓ __file structure:");
  console.log(`  - main: ${grammar.library.__file.main}`);
  console.log(`  - __read: ${!!grammar.library.__file.__read}`);
  console.log(`  - __write: ${!!grammar.library.__file.__write}`);
}

console.log("\n✨ Debug complete!");
