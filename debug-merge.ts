/**
 * DEBUG SCRIPT
 * Test mergeGrammar function to see if it's working correctly
 */

import { mergeGrammar } from "./src/languages/grammar.merge.js";
import { BASE_GRAMMAR } from "./src/languages/grammar.base.js";
import { DocStr } from "./src/languages/utils/stucture.grammar.js";

console.log("🔍 Testing mergeGrammar...\n");

// Test 1: Check if BASE_GRAMMAR has new libraries
console.log("✓ Checking BASE_GRAMMAR:");
console.log(`  - Has __file: ${!!BASE_GRAMMAR.library.__file}`);
console.log(`  - Has __http: ${!!BASE_GRAMMAR.library.__http}`);
console.log(`  - Has __json: ${!!BASE_GRAMMAR.library.__json}`);
console.log(`  - Total libraries: ${Object.keys(BASE_GRAMMAR.library).length}`);

// Test 2: Merge with English data
console.log("\n✓ Testing mergeGrammar():");
const merged = mergeGrammar({
  language: "english",
  about: "Test",
  include: DocStr("include", "test"),
});

console.log(`  - Merged language: ${merged.language}`);
console.log(`  - Has __file in merged: ${!!merged.library.__file}`);
console.log(`  - Has __http in merged: ${!!merged.library.__http}`);
console.log(`  - Total libraries in merged: ${Object.keys(merged.library).length}`);

// Test 3: Check library structure
console.log("\n✓ Library structure:");
console.log(`  - __file.main: ${merged.library.__file?.main?.main}`);
console.log(`  - __http.main: ${merged.library.__http?.main?.main}`);

console.log("\n✨ Debug complete!");
