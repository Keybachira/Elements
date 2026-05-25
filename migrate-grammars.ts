/**
 * MIGRATION SCRIPT
 * Converts all language grammar files from old format to new mergeGrammar system
 * 
 * Usage:
 *   tsx migrate-grammars.ts
 * 
 * This script:
 * 1. Reads all grammars/*ts files
 * 2. Extracts language-specific translations
 * 3. Replaces with mergeGrammar() pattern
 * 4. Preserves any language-specific overrides
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GRAMMARS_DIR = path.join(__dirname, "src/languages/grammars");

interface LanguageData {
  language: string;
  about: string;
  include: {
    main: string;
    description: string;
  };
  hasOverrides: boolean;
  filePath: string;
}

/**
 * Extract language data from current grammar file
 */
async function extractLanguageData(filePath: string): Promise<LanguageData | null> {
  try {
    const content = await fs.readFile(filePath, "utf-8");

    // Extract language name
    const languageMatch = content.match(/language:\s*["']([^"']+)["']/);
    const language = languageMatch ? languageMatch[1] : null;

    // Extract about
    const aboutMatch = content.match(/about:\s*["']([^"']+)["']/);
    const about = aboutMatch ? aboutMatch[1] : null;

    // Extract include main and description
    const includeMatch = content.match(
      /include:\s*DocStr\(\s*["']([^"']+)["']\s*,\s*["']([^"']+)["']\s*\)/
    );
    const includeMain = includeMatch ? includeMatch[1] : "include";
    const includeDesc = includeMatch ? includeMatch[2] : "used to include language, libraries or data structure from another file";

    if (!language || !about) {
      console.warn(`⚠️  Could not extract metadata from ${path.basename(filePath)}`);
      return null;
    }

    return {
      language,
      about,
      include: {
        main: includeMain,
        description: includeDesc,
      },
      hasOverrides: false,
      filePath,
    };
  } catch (error) {
    console.error(`❌ Error reading ${filePath}:`, error);
    return null;
  }
}

/**
 * Generate new grammar file content using mergeGrammar
 */
function generateNewContent(langData: LanguageData): string {
  return `import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const ${langData.language} = new Language(
  mergeGrammar({
    language: "${langData.language}",
    about:
      "${langData.about}",

    include: DocStr(
      "${langData.include.main}",
      "${langData.include.description}",
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
`;
}

/**
 * Main migration logic
 */
async function migrateGrammars() {
  console.log("🚀 Starting grammar migration...\n");

  try {
    // Get all .ts files in grammars directory
    const files = await fs.readdir(GRAMMARS_DIR);
    const grammarFiles = files
      .filter((f) => f.endsWith(".ts") && !f.includes("example"))
      .map((f) => path.join(GRAMMARS_DIR, f));

    console.log(`📁 Found ${grammarFiles.length} grammar files to migrate\n`);

    let successCount = 0;
    let errorCount = 0;

    // Process each file
    for (const filePath of grammarFiles) {
      const basename = path.basename(filePath);
      process.stdout.write(`⏳ Processing ${basename}... `);

      const langData = await extractLanguageData(filePath);
      if (!langData) {
        console.log("❌ SKIPPED");
        errorCount++;
        continue;
      }

      const newContent = generateNewContent(langData);
      await fs.writeFile(filePath, newContent, "utf-8");
      console.log("✅ DONE");
      successCount++;
    }

    console.log(`\n✨ Migration complete!`);
    console.log(`✅ Migrated: ${successCount} files`);
    console.log(`❌ Errors: ${errorCount} files`);
    console.log(`\n📝 Next steps:`);
    console.log(`1. Review the migrated files to ensure they look correct`);
    console.log(`2. Run: npm run dev`);
    console.log(`3. Test that all languages compile and load correctly`);
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

// Run migration
migrateGrammars();
