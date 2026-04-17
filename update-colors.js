const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // Atualiza a paleta Tailwind
    content = content.replace(/900: '#010c24'/g, "900: '#0d0e3a'");
    content = content.replace(/800: '#011843'/g, "800: '#16175b'");
    content = content.replace(/700: '#07245c'/g, "700: '#1e1f77'");
    content = content.replace(/600: '#242593'/g, "600: '#242593'");
    
    // Atualiza o CSS Base
    content = content.replace(/background-color: #010c24/g, "background-color: #0d0e3a");
    content = content.replace(/background: rgba\(1,\s*24,\s*67,\s*0\.45\)/g, "background: rgba(22, 23, 91, 0.45)");
    content = content.replace(/rgba\(7,\s*36,\s*92,\s*0\.6\)/g, "rgba(30, 31, 119, 0.6)");
    content = content.replace(/rgba\(1,\s*12,\s*36,\s*0\.8\)/g, "rgba(13, 14, 58, 0.8)");
    
    // Atualiza classes utilitárias no HTML (fundo dos cards e seções)
    content = content.replace(/#01081a/g, "#0a0a2e");
    content = content.replace(/#010c24/g, "#0d0e3a");

    fs.writeFileSync(f, content, 'utf8');
    console.log(`Paleta atualizada em: ${f}`);
});
