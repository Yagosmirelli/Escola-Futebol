const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // Atualiza o background principal para RGB 36,37,147 (#242593)
    content = content.replace(/900: '#0[a-f0-9]{5}'/gi, "900: '#242593'");
    content = content.replace(/background-color: #0[a-f0-9]{5}/gi, "background-color: #242593");
    content = content.replace(/::-webkit-scrollbar-track {\s*background: #0[a-f0-9]{5}/g, "::-webkit-scrollbar-track {\n            background: #242593");
    content = content.replace(/bg-\[#0a0a2e\]/g, "bg-[#242593]");
    content = content.replace(/#0a0a2e/g, "#242593");

    // O antigo azul vibrante dos botões precisa mudar para Branco/Prata para dar contraste com o fundo azul absoluto
    content = content.replace(/600: '#242593'/g, "600: '#ffffff'");
    content = content.replace(/detail: '#242593'/g, "detail: '#ffffff'");
    content = content.replace(/detailLight: '#4f52ff'/g, "detailLight: '#e5e7eb'");
    
    // Gradientes nos estilos CSS (botoes e textos)
    content = content.replace(/background: linear-gradient\(135deg, #242593, #4f52ff\)/g, "background: linear-gradient(135deg, #ffffff, #e5e7eb); -webkit-text-fill-color: white;"); // Textos gradient agora ficam brancos plenos
    content = content.replace(/background: linear-gradient\(90deg, #242593, #4f52ff\)/g, "background: linear-gradient(90deg, #ffffff, #e5e7eb); color: #242593 !important; text-shadow: none;"); // Botões brancos com texto azul
    content = content.replace(/border-color: #242593/g, "border-color: #ffffff");
    content = content.replace(/background: #242593/g, "background: #ffffff"); // Scrollbar
    
    // Sombras premium em volta dos botões e logo (adaptadas pro branco)
    content = content.replace(/rgba\(36, 37, 147, 0\.[0-9]+\)/g, "rgba(255, 255, 255, 0.3)");
    
    // Efeitos Glassmorphism
    // Fundo do navbar
    content = content.replace(/rgba\(22, 23, 91, 0\.45\)/g, "rgba(25, 26, 102, 0.45)");
    // Cards
    content = content.replace(/rgba\(30, 31, 119, 0\.6\)/g, "rgba(43, 44, 140, 0.6)");
    content = content.replace(/rgba\(13, 14, 58, 0\.8\)/g, "rgba(28, 29, 115, 0.8)");

    fs.writeFileSync(f, content, 'utf8');
    console.log(`Pintado de #242593 com maestria: ${f}`);
});
