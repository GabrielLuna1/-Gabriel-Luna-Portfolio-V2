const fs = require('fs');

const filesToFix = [
  'd:/Portfolio-V2/src/data/types.ts',
  'd:/Portfolio-V2/src/data/stack.ts',
  'd:/Portfolio-V2/src/components/sections/TechStack.tsx',
  'd:/Portfolio-V2/src/components/ui/CommandMenu.tsx',
  'd:/Portfolio-V2/src/components/layout/Footer.tsx',
  'd:/Portfolio-V2/src/app/projetos/job-hunter/page.tsx',
  'd:/Portfolio-V2/src/app/projetos/stockmaster/page.tsx',
  'd:/Portfolio-V2/src/app/projetos/page.tsx'
];

for (const file of filesToFix) {
   if (fs.existsSync(file)) {
       let content = fs.readFileSync(file, 'utf8');
       if (content.startsWith('"') && content.endsWith('"')) {
           try {
               const unescaped = JSON.parse(content);
               fs.writeFileSync(file, unescaped, 'utf8');
               console.log('Fixed', file);
           } catch(e) {
               console.error('Error parsing', file, e.message);
           }
       } else if (content.startsWith('"') && !content.endsWith('"')) {
           try {
               // Sometimes the trailing quote is missing due to weird truncation
               const unescaped = JSON.parse(content + '"');
               fs.writeFileSync(file, unescaped, 'utf8');
               console.log('Fixed (appended quote)', file);
           } catch(e) {
               console.log('Failed fallback', file);
           }
       }
   }
}
