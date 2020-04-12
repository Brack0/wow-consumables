import { readdirSync, unlinkSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import {
  buildGenerator,
  CompilerOptions,
  Definition,
  getProgramFromFiles,
  PartialArgs,
} from 'typescript-json-schema';

const schemaPath = 'src/app/new-model/schema.ts';
const outputPath = 'src/assets/json/schema/';

cleanOutputPath();

generateSchemas();

/**
 * Remove files from outputPath directory
 */
function cleanOutputPath() {
  readdirSync(outputPath).forEach(file => {
    unlinkSync(join(outputPath, file));
  });
}

/**
 * Use typescript-json-schema to generate JSON schema files
 */
function generateSchemas() {
  const schemaSettings: PartialArgs = {
    noExtraProps: true,
    required: true,
    strictNullChecks: true,
  };

  const options: CompilerOptions = {
    skipLibCheck: true,
  };

  const program = getProgramFromFiles([resolve(schemaPath)], options);
  const generator = buildGenerator(program, schemaSettings);
  generator
    .getMainFileSymbols(program)
    .filter(symbol => symbol.endsWith('Schema')) // Only use types ending with "Schema"
    .forEach(symbol => {
      writeOutputFile(generator.getSchemaForSymbol(symbol), symbol);
    });
}

/**
 * Write schemas in assets folder
 * @param schema Schema to write
 * @param symbol Type name
 */
function writeOutputFile(schema: Definition, symbol: string) {
  writeFileSync(
    `${outputPath}${formatFilename(symbol)}.json`,
    JSON.stringify(schema, undefined, 2)
  );
}

/**
 * Convert CamelCase to snake.case (with dots "." instead of underscores)
 * @param input string to convert
 */
function formatFilename(input: string) {
  return input
    .split(/(?=[A-Z])/)
    .map(x => x.toLowerCase())
    .join('.');
}
