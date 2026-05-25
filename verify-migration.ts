/**
 * VERIFICATION SCRIPT
 * Checks that all languages:
 * 1. Load correctly
 * 2. Have all new libraries from BASE_GRAMMAR
 * 3. No compilation errors
 */

import { Grammer } from "./src/languages/grammar.js";
import list from "./src/languages/language-list.json" with { type: "json" };

const languages = list.languages;

console.log("🔍 Verifying grammar migration...\n");

let successCount = 0;
let missingLibraries = 0;

// Test each language
for (const langName of languages) {
  process.stdout.write(`⏳ ${langName}... `);

  try {
    const grammar = Grammer(langName);

    if (!grammar) {
      console.log("❌ FAILED TO LOAD");
      continue;
    }

    // Check for key new libraries
    const hasFileLib = grammar.library?.__file?.main;
    const hasHttpLib = grammar.library?.__http?.main;
    const hasJsonLib = grammar.library?.__json?.main;
    const hasArrayOps = grammar.library?.__array_ops?.main;
    const hasObjectOps = grammar.library?.__object_ops?.main;
    const hasCrypto = grammar.library?.__crypto?.main;
    const hasStream = grammar.library?.__stream?.main;
    const hasLogger = grammar.library?.__logger?.main;

    if (
      hasFileLib &&
      hasHttpLib &&
      hasJsonLib &&
      hasArrayOps &&
      hasObjectOps &&
      hasCrypto &&
      hasStream &&
      hasLogger
    ) {
      console.log("✅ OK (All libraries inherited)");
      successCount++;
    } else {
      console.log("⚠️  MISSING LIBRARIES");
      missingLibraries++;
      if (!hasFileLib) console.log(`  - Missing __file`);
      if (!hasHttpLib) console.log(`  - Missing __http`);
      if (!hasJsonLib) console.log(`  - Missing __json`);
      if (!hasArrayOps) console.log(`  - Missing __array_ops`);
      if (!hasObjectOps) console.log(`  - Missing __object_ops`);
      if (!hasCrypto) console.log(`  - Missing __crypto`);
      if (!hasStream) console.log(`  - Missing __stream`);
      if (!hasLogger) console.log(`  - Missing __logger`);
    }
  } catch (error) {
    console.log("❌ ERROR:", (error as Error).message);
  }
}

console.log(`\n✨ Verification Results:`);
console.log(`✅ Successfully verified: ${successCount}/${languages.length}`);
console.log(`⚠️  Issues found: ${languages.length - successCount}`);
console.log(`📚 Languages with missing libraries: ${missingLibraries}`);

if (successCount === languages.length) {
  console.log(`\n🎉 All languages migrated successfully!`);
  process.exit(0);
} else {
  console.log(`\n⚠️  Some languages need attention`);
  process.exit(1);
}
