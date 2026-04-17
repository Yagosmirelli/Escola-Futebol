const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    // Replace hex colors (magenta gradient bounds)
    content = content.replace(/#a0138e/gi, '#242593');
    content = content.replace(/#d124bc/gi, '#4f52ff'); // Bright matching blue for gradient
    // Replace rgba variants
    content = content.replace(/160,\s*19,\s*142/g, '36, 37, 147');
    console.log(`Updated ${f}`);
    fs.writeFileSync(f, content);
});
