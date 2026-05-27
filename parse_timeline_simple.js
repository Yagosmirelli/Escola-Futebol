const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\Familia Smirelli\\OneDrive\\Área de Trabalho\\Empresa Yago\\Escola Futebol\\lucas_sousa_timeline (1).html', 'utf8');

const parts = content.split(/<div class="entry\s+/);
let outputText = `Total parts found: ${parts.length - 1}\n\n`;

for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    
    // Find year
    const yearMatch = part.match(/<div class="year">([\s\S]*?)<\/div>/);
    // Find title
    const titleMatch = part.match(/<h2 class="title">([\s\S]*?)<\/h2>/);
    // Find image src
    const imgMatch = part.match(/<img src="([^"]*)"/);
    
    outputText += `Entry #${i}:\n`;
    outputText += `  Year: ${yearMatch ? yearMatch[1].trim() : 'N/A'}\n`;
    outputText += `  Title: ${titleMatch ? titleMatch[1].trim() : 'N/A'}\n`;
    outputText += `  Has Image: ${imgMatch ? 'Yes (length: ' + imgMatch[1].length + ')' : 'No'}\n\n`;
}

// Check current-entry as well
const currentMatch = content.match(/<div class="current-entry">([\s\S]*?)<\/section>/);
if (currentMatch) {
    const block = currentMatch[1];
    const yearMatch = block.match(/<div class="current-year">([\s\S]*?)<\/div>/);
    const titleMatch = block.match(/<h2 class="current-title">([\s\S]*?)<\/h2>/);
    const imgMatch = block.match(/<img src="([^"]*)"/);
    outputText += `Current Entry:\n`;
    outputText += `  Year: ${yearMatch ? yearMatch[1].trim() : 'N/A'}\n`;
    outputText += `  Title: ${titleMatch ? titleMatch[1].trim() : 'N/A'}\n`;
    outputText += `  Has Image: ${imgMatch ? 'Yes' : 'No'}\n`;
}

fs.writeFileSync('C:\\Users\\Familia Smirelli\\.gemini\\antigravity\\scratch\\parsed_timeline_output.txt', outputText, 'utf8');
console.log('Split Done!');
