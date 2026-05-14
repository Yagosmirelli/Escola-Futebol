const fs = require('fs');

const filePath = 'c:\\Users\\Familia Smirelli\\OneDrive\\Área de Trabalho\\Empresa Yago\\Escola Futebol\\escolaFut.html';

let content = fs.readFileSync(filePath, 'utf8');

const idx = content.indexOf('<!-- Coach Staff Section -->');
if (idx !== -1) {
    content = content.substring(0, idx);
}

const newPart = `    <!-- Coach Staff Section -->
    <section id="staff" class="py-24 bg-[#12136b] relative border-t border-brand-700/50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-20">
                <div class="inline-block bg-brand-detail/10 border border-brand-detail/30 px-4 py-1 rounded-full mb-4">
                    <span class="text-brand-detail font-bold text-xs uppercase tracking-widest" data-i18n="staff_badge">Nossa Equipe</span>
                </div>
                <h2 class="text-4xl md:text-5xl font-black text-white mb-6" data-i18n="staff_title">Coach Staff</h2>
                <p class="text-gray-400 font-light text-lg" data-i18n="staff_subtitle">Treinadores com experiência internacional focados no seu máximo potencial.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                <!-- Coach 1: Lucas Sousa -->
                <div class="glass-card rounded-3xl p-8 text-center group hover:-translate-y-4 transition duration-500">
                    <div class="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-brand-800 group-hover:border-brand-detail transition duration-500 mb-6 shadow-xl">
                        <img src="imagem.lucas.perfil1.jpeg" alt="Lucas Sousa" class="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition duration-500">
                    </div>
                    <h4 class="text-2xl font-black text-white mb-2">Lucas Sousa</h4>
                    <p class="text-brand-detail font-bold text-sm uppercase tracking-wider mb-4" data-i18n="staff_lucas_role">Head Coach</p>
                    <p class="text-gray-400 font-light text-sm mb-6" data-i18n="staff_lucas_desc">Especialista em desenvolvimento tático e técnico para os padrões mais exigentes do futebol universitário.</p>
                    <div class="flex justify-center space-x-4 mb-5">
                        <a href="https://www.linkedin.com/in/lucas-sousa-579309106/" target="_blank" class="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0A66C2] transition"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/lucasgfernandes" target="_blank" class="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 transition"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <a href="lucas.html" class="block w-full py-3 bg-brand-900 border border-brand-800 text-brand-detail font-bold rounded-xl hover:bg-brand-detail hover:mb-0 hover:text-white transition" data-i18n="staff_btn_profile">Ver Perfil Completo</a>
                </div>

                <!-- Coach 2: Jenn Hauser -->
                <div class="glass-card rounded-3xl p-8 text-center group hover:-translate-y-4 transition duration-500 border-b-4 border-b-brand-detail">
                    <div class="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-brand-800 group-hover:border-brand-detail transition duration-500 mb-6 shadow-xl">
                        <img src="imagem.jenn.perfil.jpeg" alt="Jenn Hauser" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500">
                    </div>
                    <h4 class="text-2xl font-black text-white mb-2">Jenn Hauser</h4>
                    <p class="text-brand-detail font-bold text-sm uppercase tracking-wider mb-4" data-i18n="staff_jenn_role">Athletic Development</p>
                    <p class="text-gray-400 font-light text-sm mb-6" data-i18n="staff_jenn_desc">Expertise em performance esportiva e na rota de transição para o esporte americano de elite.</p>
                    <div class="flex justify-center space-x-4 mb-5">
                        <a href="#" class="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0A66C2] transition"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/jennhause2" target="_blank" class="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 transition"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <a href="jenn.html" class="block w-full py-3 bg-brand-900 border border-brand-800 text-brand-detail font-bold rounded-xl hover:bg-brand-detail hover:mb-0 hover:text-white transition" data-i18n="staff_btn_profile">Ver Perfil Completo</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contato Section -->
    <section id="contato" class="py-24 bg-[#1a1b8a]/40 relative border-t border-white/5">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="glass-card rounded-3xl overflow-hidden max-w-6xl mx-auto flex flex-col lg:flex-row shadow-2xl">
                
                <!-- Info Contato -->
                <div class="lg:w-2/5 relative p-12 overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-brand-700 to-brand-detail opacity-60" style="background:linear-gradient(135deg,#242593,#00D4FF);"></div>
                    <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                    
                    <div class="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <h2 class="text-3xl font-black text-white mb-2" data-i18n="contact_title">Conquiste o seu futuro</h2>
                            <p class="text-white/80 font-light mb-12" data-i18n="contact_subtitle">Dê o primeiro passo para jogar e estudar nos Estados Unidos.</p>
                            
                            <div class="space-y-6">
                                <div class="flex items-start bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                    <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                                        <i class="fa-solid fa-location-dot text-white"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-white" data-i18n="contact_base_title">Localização</h4>
                                        <p class="text-white/70 text-sm" data-i18n="contact_base_desc">Jacksonville, FL</p>
                                    </div>
                                </div>
                                <div class="flex items-start bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                    <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                                        <i class="fa-brands fa-whatsapp text-white text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-white" data-i18n="contact_phone_title">Telefone</h4>
                                        <p class="text-white/70 text-sm">+1 (203) 928-8568</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Google Maps - Jacksonville, FL -->
                            <div class="mt-8 h-48 w-full rounded-xl overflow-hidden border border-white/10 relative shadow-inner">
                                <iframe src="https://maps.google.com/maps?q=Jacksonville,%20FL&t=&z=11&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" class="absolute inset-0 grayscale hover:grayscale-0 transition duration-500"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form -->
                <div class="lg:w-3/5 p-12 bg-white/5">
                    <h3 class="text-2xl font-bold text-white mb-8" data-i18n="contact_form_title">Envie uma mensagem</h3>
                    
                    <form onsubmit="sendToWhatsApp(event)" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="contact_label_name">Nome Completo</label>
                                <input type="text" id="wa_name" required class="w-full bg-brand-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-detail focus:ring-1 focus:ring-brand-detail transition">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="contact_label_age">Idade</label>
                                <input type="number" id="wa_age" required class="w-full bg-brand-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-detail focus:ring-1 focus:ring-brand-detail transition">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="contact_label_email">E-mail</label>
                                <input type="email" id="wa_email" required class="w-full bg-brand-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-detail focus:ring-1 focus:ring-brand-detail transition">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
                                <input type="tel" id="wa_phone" required class="w-full bg-brand-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-detail focus:ring-1 focus:ring-brand-detail transition">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="contact_label_msg">Sua Mensagem</label>
                            <textarea id="wa_msg" rows="4" required class="w-full bg-brand-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-detail focus:ring-1 focus:ring-brand-detail transition"></textarea>
                        </div>
                        <button type="submit" class="w-full btn-primary text-white font-bold text-lg py-4 rounded-xl" data-i18n="contact_btn_submit">
                            Enviar Aplicação
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-10 border-t border-white/10" style="background:#0e0f5c;">
        <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-0">
            <div class="flex items-center justify-center md:justify-start">
                <div class="logo-container w-12 h-12 mr-3 border-2 border-brand-detail shadow-[0_0_10px_rgba(36, 37, 147,0.4)]">
                    <img src="logo.png" alt="Logo">
                </div>
                <span class="font-bold text-white tracking-widest uppercase">Hattrick Academy</span>
            </div>
            
            <p class="text-gray-500 text-sm font-light" data-i18n="footer_copy">&copy; 2026 Hattrick Soccer. Experiência Premium. Todos os direitos reservados.</p>
            
            <div class="flex space-x-4 justify-center">
                <a href="https://www.instagram.com/hattrickacademyusa?igsh=MXI3YXV3aHcxemQwOQ==" target="_blank" class="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 hover:scale-110 shadow-lg transition duration-300">
                    <i class="fa-brands fa-instagram text-lg"></i>
                </a>
            </div>
        </div>
    </footer>

    <script>
        const btn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('sidebar-overlay');

        function toggleMenu() {
            menu.classList.toggle('translate-x-full');
            overlay.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        }

        btn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking links
        const navLinks = menu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    toggleMenu();
                }
            });
        });

        function sendToWhatsApp(e) {
            e.preventDefault();
            const name = document.getElementById('wa_name').value;
            const age = document.getElementById('wa_age').value;
            const email = document.getElementById('wa_email').value;
            const phone = document.getElementById('wa_phone').value;
            const msg = document.getElementById('wa_msg').value;

            // Número do WhatsApp da Hattrick (Formato: DDI+DDD+Numero) - Somente números!
            const companyPhone = "12039288568"; 

            const isEnglish = localStorage.getItem('preferredLang') === 'en';

            let text = "";
            if (isEnglish) {
                text = \`Hello Hattrick! My name is \${name}, I am \${age} years old.\\n\\n\` +
                       \`Email: \${email}\\n\` +
                       \`Phone: \${phone}\\n\\n\` +
                       \`Message:\\n\${msg}\`;
            } else {
                text = \`Olá equipe Hattrick! Meu nome é \${name}, tenho \${age} anos.\\n\\n\` +
                       \`E-mail: \${email}\\n\` +
                       \`WhatsApp: \${phone}\\n\\n\` +
                       \`Mensagem:\\n\${msg}\`;
            }

            const encodedText = encodeURIComponent(text);
            const waUrl = \`https://wa.me/\${companyPhone}?text=\${encodedText}\`;
            
            window.open(waUrl, '_blank');
            e.target.reset(); // Limpa o formulário após abrir o link
        }
    </script>
    <!-- Translation Engine -->
    <script src="i18n.js"></script>
</body>
</html>
`;

content += newPart;

fs.writeFileSync(filePath, content, 'utf8');
