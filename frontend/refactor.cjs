const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
    { regex: /bg-slate-900/g, replacement: 'bg-bg-surface' },
    { regex: /bg-slate-800/g, replacement: 'bg-bg-elevated' },
    { regex: /border-slate-800/g, replacement: 'border-accent-secondary' },
    { regex: /text-slate-400/g, replacement: 'text-text-secondary' },
    { regex: /text-white/g, replacement: 'text-text-primary' },
];

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            for (const { regex, replacement } of replacements) {
                if (regex.test(content)) {
                    content = content.replace(regex, replacement);
                    modified = true;
                }
            }
            
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

processDirectory(srcDir);
console.log("Refactoring complete.");
