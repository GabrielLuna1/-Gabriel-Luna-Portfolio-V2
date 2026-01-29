// generate-version.js
const fs = require("fs");
const path = require("path");

// Cria um ID único baseado na data/hora atual
const version = {
  version: Date.now().toString(),
  date: new Date().toISOString(),
};

const outputPath = path.join(__dirname, "public", "version.json");

fs.writeFileSync(outputPath, JSON.stringify(version, null, 2));

console.log(`✅ Arquivo version.json gerado com sucesso: ${version.version}`);
