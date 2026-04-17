const translations = {
    pt: {
        // Navbar
        nav_sobre: "Sobre",
        nav_camp: "Soccer Camp",
        nav_staff: "Staff",
        nav_estrutura: "Estrutura",
        nav_portfolio: "Portfólio",
        nav_login: "Área do Atleta",
        nav_contact: "Contato",
        
        // escolaFut.html - Hero
        hero_badge: "<span class='text-gray-400'>Rumo aos</span> EUA",
        hero_title: "A Ginga Brasileira,<br><span class='text-gradient'>Oportunidade Global.</span>",
        hero_subtitle: "A ponte definitiva entre o talento do futebol brasileiro e as bolsas de estudo universitárias de elite nos Estados Unidos.",
        hero_btn_camp: "Conheça os Camps",
        hero_btn_contact: "Fale Conosco",
        
        // escolaFut.html - Sobre Section
        sobre_badge: "A Nossa História",
        sobre_title: "Mais que futebol.<br> Uma <span class='text-brand-detail'>preparação</span> para a vida.",
        sobre_desc: "Nossa metodologia exclusiva combina o talento natural do futebol brasileiro com a disciplina tática e preparação física exigidas internacionalmente. Entregamos uma formação integral, garantindo que nossos atletas brilhem tanto nos gramados quanto nas salas de aula, prontos para acessar as melhores <strong>bolsas universitárias</strong> e oportunidades globais.",
        sobre_stat1_title: "100<span class='text-brand-detail'>%</span>",
        sobre_stat1_desc: "Foco Multidisciplinar",
        sobre_stat2_title: "+50",
        sobre_stat2_desc: "Bolsas e Parcerias",
        sobre_btn: "Conheça Nossa Missão Completa <i class='fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-2 transition'></i>",
        sobre_item1: "Treinamento Tático de Elite",
        sobre_item2: "Aulas de Inglês integradas",
        sobre_item3: "Assessoria para intercâmbio",
        sobre_card_badge: "Bilingual<br><span class='text-gray-400 font-light'>Academy</span>",

        // escolaFut.html - Camps Section
        camp_badge: "Programas Intensivos",
        camp_title: "Hattrick Camps",
        camp_subtitle: "Vivencie a rotina de um atleta universitário americano e prepare-se para os palcos mundiais.",
        camp_br_tag: "<img src='https://flagcdn.com/w20/br.png' class='mr-2 rounded-sm' alt='BR'> Etapa Brasil",
        camp_br_title: "Draft Camp",
        camp_br_desc: "Imersão de 7 dias no Brasil. Rotina dupla de treinos, palestras sobre o sistema universitário (NCAA) e simulações de jogos em inglês.",
        camp_br_btn: "Inscreva-se <i class='fa-solid fa-arrow-right ml-2 transform group-hover/btn:translate-x-2 transition'></i>",
        camp_us_tag: "<img src='https://flagcdn.com/w20/us.png' class='mr-2 rounded-sm' alt='US'> Etapa USA",
        camp_us_title: "Showcase Tour",
        camp_us_desc: "A experiência definitiva. Levamos talentos para os Estados Unidos para jogar torneios de vitrine diante dos olheiros (College Coaches).",
        camp_us_btn: "Saiba Mais <i class='fa-solid fa-arrow-right ml-2 transform group-hover/btn:translate-x-2 transition'></i>",

        // escolaFut.html - Staff Section
        staff_badge: "Nossa Equipe",
        staff_title: "Coach Staff",
        staff_subtitle: "Treinadores com experiência internacional focados no seu máximo potencial.",
        staff_lucas_role: "Head Coach",
        staff_lucas_desc: "Desenvolve atletas dentro de um modelo que integra técnica, inteligência de jogo e mentalidade competitiva.",
        staff_jenn_role: "Athletic Director",
        staff_jenn_desc: "Garante estrutura, metodologia e excelência na certificação e formação dos atletas para o EUA.",
        staff_btn_profile: "Ver Perfil Completo",

        // Contact Section (Global)
        contact_title: "Conquiste o seu futuro",
        contact_subtitle: "Dê o primeiro passo para jogar e estudar nos Estados Unidos.",
        contact_base_title: "Base Brasil",
        contact_base_desc: "São Paulo, SP",
        contact_phone_title: "Telefone",
        contact_form_title: "Envie uma mensagem",
        contact_label_name: "Nome Completo",
        contact_label_age: "Idade",
        contact_label_email: "E-mail",
        contact_label_msg: "Sua Mensagem",
        contact_btn_submit: "Enviar Aplicação",

        // Footer (Global)
        footer_copy: "&copy; 2026 Hattrick Soccer. Experiência Premium. Todos os direitos reservados.",

        // Coach pages - shared
        coach_back: "Voltar à Seção da Equipe",
        coach_page_label: "Staff Profile",

        // lucas.html
        lucas_role_badge: "Head Coach - Ginga FC",
        lucas_subtitle: "Sua atuação conecta Brasil e Estados Unidos na formação de atletas preparados para o cenário global.",
        lucas_p1: "<strong class='text-white font-bold'>Mentalidade Competitiva:</strong> Formado no ambiente profissional do Grêmio Foot-Ball Porto Alegrense e com experiência nos Estados Unidos pelo Elm City Express, Lucas construiu sua carreira unindo alto rendimento e visão estratégica.",
        lucas_p2: "Graduado em Business Administration pela University of Bridgeport — onde foi eleito <strong class='text-white font-bold text-brand-detail'>Jogador do Ano e melhor da liga quatro vezes</strong> — hoje atua como treinador na Ginga FC (EUA), desenvolvendo atletas dentro de um modelo internacional que integra técnica, inteligência de jogo e mentalidade competitiva.",
        lucas_skills_title: "Especialidades do Perfil",
        lucas_skill1: "Inteligência de Jogo",
        lucas_skill2: "Mentalidade Competitiva",
        lucas_skill3: "Desenvolvimento Internacional",
        lucas_stat1: "Prêmios MVP da Liga",
        lucas_stat2: "Cenários Profissionais",
        lucas_quote: "\"Desenvolvemos atletas dentro de um modelo internacional que integra técnica impecável e mentalidade global.\"",

        // jenn.html
        jenn_role_badge: "Athletic Director - Ginga FC",
        jenn_subtitle: "Sua experiência combina preparo acadêmico, liderança e padrão competitivo internacional.",
        jenn_p1: "<strong class='text-white font-bold'>Padrão Norte-Americano:</strong> Ex-atleta universitária pela Quinnipiac University, Jennifer representa o padrão de formação e certificação do futebol norte-americano.",
        jenn_p2: "Treinadora licenciada (<strong class='text-white font-bold text-brand-detail'>C e B – U.S. Soccer</strong>) e diretora na Ginga FC, lidera processos de desenvolvimento técnico e organizacional, garantindo estrutura, metodologia e excelência na formação dos atletas.",
        jenn_skills_title: "Especialidades do Perfil",
        jenn_skill1: "Licenciamento U.S. Soccer",
        jenn_skill2: "Desenvolvimento Técnico",
        jenn_skill3: "Organização Estrutural",
        jenn_stat1: "Certificações U.S. Soccer",
        jenn_stat2: "Formação Universitária",
        jenn_quote: "\"Garantimos estrutura, metodologia e excelência incontestável na formação dos nossos atletas para o cenário internacional.\"",

        // portfolio.html
        portfolio_badge: "Nossas Conquistas",
        portfolio_title: "Mural de <span class='text-gradient'>Atletas</span>",
        portfolio_subtitle: "Viagens exclusivas, treinamentos intensos e o momento mais aguardado: a assinatura da sonhada bolsa.",
        portfolio_filter_all: "Todos",
        portfolio_filter_usa: "USA Showcase",
        portfolio_filter_nli: "Assinatura NLI",
        portfolio_filter_training: "Treinos e Camps",

        // sobre.html
        sobre_page_badge: "Nossa História",
        sobre_page_title: "Sobre a <span class='text-gradient'>Hattrick</span>",
        sobre_page_subtitle: "Conheça a essência da nossa academia e o que nos motiva a transformar o futuro de jovens atletas.",
        sobre_missao_title: "Nossa <span class='text-gradient'>Missão</span>",
        sobre_missao_p1: "Na <strong class='text-white text-xl'>Hattrick Soccer Academy</strong>, nossa missão é preparar jovens talentos do futebol brasileiro, com idades entre <span class='text-brand-detail font-bold text-xl inline-block transform hover:scale-110 transition cursor-default'>4 e 16 anos</span>, para oportunidades acadêmicas e atléticas internacionais.",
        sobre_missao_p2: "Oferecemos um ambiente de aprendizagem bilíngue, onde os alunos podem aprender inglês naturalmente enquanto se aprimoram no futebol. Nosso objetivo é que cada estudante saia da academia não apenas como um melhor jogador, mas também como um <strong class='text-white font-bold border-b-2 border-brand-detail pb-1 hover:text-brand-detail transition'>falante confiante da língua inglesa</strong>, pronto para enfrentar os desafios do mundo globalizado.",
        sobre_missao_btn: "Conheça Nossos Programas <i class='fa-solid fa-arrow-right ml-3 transform group-hover:translate-x-2 transition'></i>",
        sobre_team_badge: "Nossa Equipe",
        sobre_team_title: "Liderança Técnica",
        sobre_carlos_role: "Treinador de Futebol, Licença UEFA A",
        sobre_carlos_desc: "Carlos é um treinador experiente com mais de <strong class='text-white'>10 anos de atuação</strong> em academias de futebol. Ele tem um profundo conhecimento das técnicas de treinamento e é apaixonado por desenvolver habilidades em jovens atletas.",
        sobre_edu_label: "Educação",
        sobre_cert_label: "Certificações",
        sobre_carlos_edu1: "Formação em Educação Física pela Universidade de São Paulo.",
        sobre_carlos_edu2: "Mestrado em Treinamento Esportivo pela Universidade Estadual de Campinas.",
        sobre_carlos_cert1: "Licença UEFA A",
        sobre_carlos_cert2: "Certificação em Treinamento de Jovens Atletas.",
        sobre_ana_role: "Treinadora de Habilidades, Licença CBF",
        sobre_ana_desc: "Ana é especialista em desenvolver as habilidades técnicas dos jogadores, com uma abordagem focada no <strong class='text-white'>crescimento individual</strong> e no trabalho em equipe.",
        sobre_ana_edu1: "Bacharel em Educação Física pela Universidade Federal de São Paulo.",
        sobre_ana_edu2: "Curso de Formação de Treinadores pela Confederação Brasileira de Futebol.",
        sobre_ana_cert1: "Licença CBF",
        sobre_ana_cert2: "Certificação em Psicologia do Esporte.",

        // camps.html
        camps_page_badge: "Nossos Programas",
        camps_page_title: "Camps <span class='text-gradient'>Intensivos</span>",
        camps_page_subtitle: "Mergulhe no mais alto nível de exigência competitiva. A sua porta de entrada para vivenciar como um atleta global se prepara para grandes desafios.",
        camps_draft_title: "Draft Camp - Brasil",
        camps_draft_desc: "Imersão de 7 dias nas bases do Brasil. Rotina diária focada 100% em tática, vídeos e dinâmicas preparatórias para olheiros.",
        camps_draft_price_unit: "/ vaga",
        camps_draft_feat1: "Alojamento completo e Alimentação em hotel 4 estrelas.",
        camps_draft_feat2: "Gravação Tática e cobertura completa por Drones de alta resolução.",
        camps_draft_feat3: "Aulas imersivas de Inglês com foco no nivelamento (ESL).",
        camps_draft_btn: "Aplicar para Vaga",
        camps_showcase_title: "Showcase Tour - EUA",
        camps_showcase_desc: "A experiência definitiva: viajar em grupo para jogar torneios de vitrine diante dos principais \"College Coaches\" universitários nos EUA.",
        camps_showcase_price_unit: "/ tour",
        camps_showcase_feat1: "Aéreo Internacional, Hospedagem VIP, Traslados e Seguros inclusos.",
        camps_showcase_feat2: "Mínimo de 3 Jogos Oficiais In-Loco contra academias e colegiais americanos.",
        camps_showcase_feat3: "Assessoria Jurídica especializada para a tiragem dos Vistos correspondentes (ex: F1, I-20).",
        camps_showcase_btn: "Aplicar para Vaga",

        // estrutura.html
        estrutura_back: "<i class='fa-solid fa-arrow-left mr-2'></i> Voltar ao Menu Principal",
        estrutura_header: "Nossa Estrutura",
        estrutura_badge: "A Fórmula Hattrick",
        estrutura_title: "Metodologia Exclusiva",
        estrutura_subtitle: "Do campo à sala de aula, um ecossistema desenvolvido para forjar atletas completos, prontos para a exigência internacional.",
        estrutura_box1_title: "Imersão em Inglês",
        estrutura_box1_desc: "Comunicação e orientações 100% no idioma durante o treino.",
        estrutura_box2_title: "Filmagem Tática",
        estrutura_box2_desc: "Construímos vídeos (Highlights) perfeitos para recrutadores.",
        estrutura_box3_title: "College Placement",
        estrutura_box3_desc: "Apoio burocrático e contato direto com as Universidades.",
        estrutura_box4_title: "Alta Performance",
        estrutura_box4_desc: "Preparação física padrão americano, moldada para o esporte NCAA.",
        estrutura_cta_badge: "Primeiro Passo",
        estrutura_cta_title: "Agende uma Chamada Introdutória",
        estrutura_cta_p1: "Estamos aqui para ajudar você a começar sua jornada no <strong class='text-brand-detail font-black tracking-wide bg-white/5 px-2 py-1 rounded'>HATTRICK SOCCER ACADEMY!</strong> Clique aqui para agendar uma chamada e saiba mais sobre nossos programas de treinamento de futebol em inglês.",
        estrutura_cta_p2: "Estamos prontos para responder suas perguntas e fornecer todas as informações necessárias para que seus filhos possam <strong class='text-white font-bold border-b-2 border-brand-detail'>crescer como atletas e aprender a língua inglesa</strong> de maneira natural.",
        estrutura_cta_btn: "<i class='fa-solid fa-calendar-plus mr-4 text-3xl'></i> Agendar Agora",
        estrutura_cta_btn_sub: "100% Gratuito"
    },
    en: {
        // Navbar
        nav_sobre: "About",
        nav_camp: "Soccer Camp",
        nav_staff: "Staff",
        nav_estrutura: "Facilities",
        nav_portfolio: "Portfolio",
        nav_login: "Athlete Area",
        nav_contact: "Contact",

        // escolaFut.html - Hero
        hero_badge: "<span class='text-gray-400'>Headed to the</span> USA",
        hero_title: "Brazilian Flair,<br><span class='text-gradient'>Global Opportunity.</span>",
        hero_subtitle: "The definitive bridge between Brazilian soccer talent and elite university scholarships in the United States.",
        hero_btn_camp: "Explore Camps",
        hero_btn_contact: "Contact Us",

        // escolaFut.html - Sobre Section
        sobre_badge: "Our Story",
        sobre_title: "More than soccer.<br> A <span class='text-brand-detail'>preparation</span> for life.",
        sobre_desc: "Our exclusive methodology combines the natural talent of Brazilian soccer with the tactical discipline and physical conditioning demanded internationally. We provide integral development, ensuring our athletes shine both on the pitch and in the classroom, ready to access the best <strong>college scholarships</strong> and global opportunities.",
        sobre_stat1_title: "100<span class='text-brand-detail'>%</span>",
        sobre_stat1_desc: "Multidisciplinary Focus",
        sobre_stat2_title: "+50",
        sobre_stat2_desc: "Scholarships and Partnerships",
        sobre_btn: "Discover Our Full Mission <i class='fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-2 transition'></i>",
        sobre_item1: "Elite Tactical Training",
        sobre_item2: "Integrated English Classes",
        sobre_item3: "Exchange Program Advisory",
        sobre_card_badge: "Bilingual<br><span class='text-gray-400 font-light'>Academy</span>",

        // escolaFut.html - Camps Section
        camp_badge: "Intensive Programs",
        camp_title: "Hattrick Camps",
        camp_subtitle: "Experience the routine of an American college athlete and prepare for the global stage.",
        camp_br_tag: "<img src='https://flagcdn.com/w20/br.png' class='mr-2 rounded-sm' alt='BR'> Brazil Stage",
        camp_br_title: "Draft Camp",
        camp_br_desc: "7-day immersion in Brazil. Double training routine, lectures about the university system (NCAA), and game simulations in English.",
        camp_br_btn: "Sign Up <i class='fa-solid fa-arrow-right ml-2 transform group-hover/btn:translate-x-2 transition'></i>",
        camp_us_tag: "<img src='https://flagcdn.com/w20/us.png' class='mr-2 rounded-sm' alt='US'> USA Stage",
        camp_us_title: "Showcase Tour",
        camp_us_desc: "The ultimate experience. We take talent to the United States to play in showcase tournaments in front of College Coaches.",
        camp_us_btn: "Learn More <i class='fa-solid fa-arrow-right ml-2 transform group-hover/btn:translate-x-2 transition'></i>",

        // escolaFut.html - Staff Section
        staff_badge: "Our Team",
        staff_title: "Coach Staff",
        staff_subtitle: "Internationally experienced coaches focused on your maximum potential.",
        staff_lucas_role: "Head Coach",
        staff_lucas_desc: "Develops athletes within a model that integrates technique, game intelligence, and competitive mentality.",
        staff_jenn_role: "Athletic Director",
        staff_jenn_desc: "Ensures structure, methodology, and excellence in certifying and training athletes for the US.",
        staff_btn_profile: "View Full Profile",

        // Contact Section (Global)
        contact_title: "Conquer your future",
        contact_subtitle: "Take the first step to play and study in the United States.",
        contact_base_title: "Brazil Base",
        contact_base_desc: "São Paulo, SP",
        contact_phone_title: "Phone",
        contact_form_title: "Send a message",
        contact_label_name: "Full Name",
        contact_label_age: "Age",
        contact_label_email: "Email",
        contact_label_msg: "Your Message",
        contact_btn_submit: "Submit Application",

        // Footer (Global)
        footer_copy: "&copy; 2026 Hattrick Soccer. Premium Experience. All rights reserved.",

        // sobre.html
        sobre_page_badge: "Our Story",
        sobre_page_title: "About <span class='text-gradient'>Hattrick</span>",
        sobre_page_subtitle: "Learn about the essence of our academy and what motivates us to transform the future of young athletes.",
        sobre_missao_title: "Our <span class='text-gradient'>Mission</span>",
        sobre_missao_p1: "At <strong class='text-white text-xl'>Hattrick Soccer Academy</strong>, our mission is to prepare young Brazilian soccer talents, aged <span class='text-brand-detail font-bold text-xl inline-block transform hover:scale-110 transition cursor-default'>4 to 16 years old</span>, for international academic and athletic opportunities.",
        sobre_missao_p2: "We offer a bilingual learning environment where students can naturally learn English while improving their soccer skills. Our goal is for every student to leave the academy not only as a better player, but also as a <strong class='text-white font-bold border-b-2 border-brand-detail pb-1 hover:text-brand-detail transition'>confident English speaker</strong>, ready to face the challenges of a globalized world.",
        sobre_missao_btn: "Explore Our Programs <i class='fa-solid fa-arrow-right ml-3 transform group-hover:translate-x-2 transition'></i>",
        sobre_team_badge: "Our Team",
        sobre_team_title: "Technical Leadership",
        sobre_carlos_role: "Soccer Coach, UEFA A License",
        sobre_carlos_desc: "Carlos is an experienced coach with over <strong class='text-white'>10 years of work</strong> in soccer academies. He has a deep knowledge of training techniques and is passionate about developing skills in young athletes.",
        sobre_edu_label: "Education",
        sobre_cert_label: "Certifications",
        sobre_carlos_edu1: "Degree in Physical Education from the University of São Paulo.",
        sobre_carlos_edu2: "Master's in Sports Training from the State University of Campinas.",
        sobre_carlos_cert1: "UEFA A License",
        sobre_carlos_cert2: "Certification in Youth Athlete Training.",
        sobre_ana_role: "Skills Coach, CBF License",
        sobre_ana_desc: "Ana specializes in developing players' technical skills, with an approach focused on <strong class='text-white'>individual growth</strong> and teamwork.",
        sobre_ana_edu1: "Bachelor's in Physical Education from the Federal University of São Paulo.",
        sobre_ana_edu2: "Coach Training Course by the Brazilian Football Confederation.",
        sobre_ana_cert1: "CBF License",
        sobre_ana_cert2: "Certification in Sports Psychology.",

        // camps.html
        camps_page_badge: "Our Programs",
        camps_page_title: "Intensive <span class='text-gradient'>Camps</span>",
        camps_page_subtitle: "Dive into the highest level of competitive demand. Your gateway to experience how a global athlete prepares for great challenges.",
        camps_draft_title: "Draft Camp - Brazil",
        camps_draft_desc: "7-day immersion in Brazil's facilities. Daily routine focused 100% on tactics, video analysis, and preparatory drills for scouts.",
        camps_draft_price_unit: "/ spot",
        camps_draft_feat1: "Full accommodation and meals at a 4-star hotel.",
        camps_draft_feat2: "Tactical filming and full high-resolution drone coverage.",
        camps_draft_feat3: "Immersive English classes focused on ESL leveling.",
        camps_draft_btn: "Apply for a Spot",
        camps_showcase_title: "Showcase Tour - USA",
        camps_showcase_desc: "The ultimate experience: traveling as a group to play showcase tournaments in front of top university College Coaches in the USA.",
        camps_showcase_price_unit: "/ tour",
        camps_showcase_feat1: "International flights, VIP accommodation, transfers, and insurance included.",
        camps_showcase_feat2: "Minimum of 3 official on-site games against American academies and high schools.",
        camps_showcase_feat3: "Specialized legal advisory for visa processing (e.g., F1, I-20).",
        camps_showcase_btn: "Apply for a Spot",

        // estrutura.html
        estrutura_back: "<i class='fa-solid fa-arrow-left mr-2'></i> Back to Main Menu",
        estrutura_header: "Our Facilities",
        estrutura_badge: "The Hattrick Formula",
        estrutura_title: "Exclusive Methodology",
        estrutura_subtitle: "From the field to the classroom, an ecosystem built to forge complete athletes ready for international demands.",
        estrutura_box1_title: "English Immersion",
        estrutura_box1_desc: "100% English communication and guidance during training.",
        estrutura_box2_title: "Tactical Filming",
        estrutura_box2_desc: "We build perfect highlight videos for recruiters.",
        estrutura_box3_title: "College Placement",
        estrutura_box3_desc: "Bureaucratic support and direct contact with Universities.",
        estrutura_box4_title: "High Performance",
        estrutura_box4_desc: "American-standard physical preparation tailored for NCAA sports.",
        estrutura_cta_badge: "First Step",
        estrutura_cta_title: "Schedule an Introductory Call",
        estrutura_cta_p1: "We are here to help you begin your journey at <strong class='text-brand-detail font-black tracking-wide bg-white/5 px-2 py-1 rounded'>HATTRICK SOCCER ACADEMY!</strong> Click here to schedule a call and learn more about our English-language soccer training programs.",
        estrutura_cta_p2: "We are ready to answer your questions and provide all the information needed so your children can <strong class='text-white font-bold border-b-2 border-brand-detail'>grow as athletes and learn the English language</strong> naturally.",
        estrutura_cta_btn: "<i class='fa-solid fa-calendar-plus mr-4 text-3xl'></i> Schedule Now",
        estrutura_cta_btn_sub: "100% Free",

        // Coach pages - shared
        coach_back: "Back to Team Section",
        coach_page_label: "Staff Profile",

        // lucas.html
        lucas_role_badge: "Head Coach - Ginga FC",
        lucas_subtitle: "Connecting Brazil and the United States in developing athletes ready for the global stage.",
        lucas_p1: "<strong class='text-white font-bold'>Competitive Mentality:</strong> Formed in the professional environment of Grêmio Foot-Ball Porto Alegrense and with experience in the United States playing for the Elm City Express, Lucas built his career merging high performance with strategic vision.",
        lucas_p2: "Graduated with a degree in Business Administration from the University of Bridgeport — where he was elected <strong class='text-white font-bold text-brand-detail'>Player of the Year and best in the league four times</strong> — today he works as a coach at Ginga FC (USA), developing athletes within an international model that integrates technique, game intelligence, and competitive mentality.",
        lucas_skills_title: "Profile Specialties",
        lucas_skill1: "Game Intelligence",
        lucas_skill2: "Competitive Mentality",
        lucas_skill3: "International Development",
        lucas_stat1: "League MVP Awards",
        lucas_stat2: "Professional Scenarios",
        lucas_quote: "\"We develop athletes within an international model integrating impeccable technique and a global mindset.\"",

        // jenn.html
        jenn_role_badge: "Athletic Director - Ginga FC",
        jenn_subtitle: "Her experience combines academic preparation, leadership, and an international competitive standard.",
        jenn_p1: "<strong class='text-white font-bold'>North American Standard:</strong> A former collegiate athlete at Quinnipiac University, Jennifer represents the standard of training and certification in North American soccer.",
        jenn_p2: "A licensed coach (<strong class='text-white font-bold text-brand-detail'>C and B – U.S. Soccer</strong>) and director at Ginga FC, she leads technical and organizational development processes, ensuring structure, methodology, and excellence in athlete training.",
        jenn_skills_title: "Profile Specialties",
        jenn_skill1: "U.S. Soccer Licensure",
        jenn_skill2: "Technical Development",
        jenn_skill3: "Structural Organization",
        jenn_stat1: "U.S. Soccer Certifications",
        jenn_stat2: "Collegiate Background",
        jenn_quote: "\"We ensure structure, methodology, and undeniable excellence in training our athletes for the international stage.\"",

        // portfolio.html
        portfolio_badge: "Our Achievements",
        portfolio_title: "Athlete <span class='text-gradient'>Gallery</span>",
        portfolio_subtitle: "Exclusive trips, intense training, and the most awaited moment: signing the dream scholarship.",
        portfolio_filter_all: "All",
        portfolio_filter_usa: "USA Showcase",
        portfolio_filter_nli: "NLI Signing",
        portfolio_filter_training: "Training & Camps"
    }
};

function toggleLanguage(lang) {
    // Update storage
    localStorage.setItem('preferredLang', lang);
    
    // Helper to update button styles
    const updateBtnStyles = (btns, isActive) => {
        btns.forEach(btn => {
            const isMob = btn.classList.contains('lang-btn-pt-mob') || btn.classList.contains('lang-btn-en-mob');
            
            if (isActive) {
                // Active Styles
                btn.classList.add('bg-brand-detail', 'text-brand-900', 'shadow-[0_0_10px_rgba(0,212,255,0.5)]');
                btn.classList.remove('text-gray-400', 'text-white', 'border', 'border-white/20');
            } else {
                // Inactive Styles
                btn.classList.remove('bg-brand-detail', 'text-brand-900', 'shadow-[0_0_10px_rgba(0,212,255,0.5)]');
                btn.classList.add('text-gray-400', 'hover:text-white');
                if (isMob) btn.classList.add('border', 'border-white/20', 'text-white/60');
            }
        });
    };

    const btnPts = document.querySelectorAll('.lang-btn-pt, .lang-btn-pt-mob');
    const btnEns = document.querySelectorAll('.lang-btn-en, .lang-btn-en-mob');

    if (lang === 'pt') {
        updateBtnStyles(btnPts, true);
        updateBtnStyles(btnEns, false);
    } else {
        updateBtnStyles(btnPts, false);
        updateBtnStyles(btnEns, true);
    }

    // Update Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key]; // If we decide to use placeholders
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

// Initialize from local storage or default to PT
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'pt';
    toggleLanguage(savedLang);
});
