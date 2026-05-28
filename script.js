// Dados dos ODS com contribuições e relatos detalhados para o verso
const odsData = [
    { 
        numero: 1, 
        titulo: "Erradicação da Pobreza", 
        relato: "O agronegócio gera milhões de empregos no campo, movimenta economias locais e oferece capacitação profissional. Pequenos produtores têm acesso a cooperativas e crédito rural, reduzindo a pobreza extrema em áreas rurais.",
        imagem: "https://cdn.pixabay.com/photo/2017/08/06/18/39/people-2594687_640.jpg"
    },
    { 
        numero: 2, 
        titulo: "Fome Zero", 
        relato: "A produção agrícola sustentável garante segurança alimentar para bilhões. Tecnologias como agricultura de precisão aumentam a produtividade sem expandir fronteiras agrícolas, combatendo a fome mundial.",
        imagem: "https://cdn.pixabay.com/photo/2016/03/26/17/24/rice-1280787_640.jpg"
    },
    { 
        numero: 3, 
        titulo: "Saúde e Bem-Estar", 
        relato: "Práticas agroecológicas produzem alimentos mais nutritivos, livres de agrotóxicos em excesso. O campo também promove qualidade de vida e bem-estar para trabalhadores rurais.",
        imagem: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_640.jpg"
    },
    { 
        numero: 4, 
        titulo: "Educação de Qualidade", 
        relato: "Programas de extensão rural e universidades do campo capacitam agricultores em técnicas sustentáveis, manejo do solo e tecnologias digitais, promovendo educação inclusiva.",
        imagem: "https://cdn.pixabay.com/photo/2015/01/20/12/51/child-605266_640.jpg"
    },
    { 
        numero: 5, 
        titulo: "Igualdade de Gênero", 
        relato: "Mulheres agricultoras lideram cooperativas e acessam linhas de crédito específicas. O agronegócio inclusivo garante protagonismo feminino e redução da desigualdade no campo.",
        imagem: "https://cdn.pixabay.com/photo/2018/11/07/19/52/woman-3801479_640.jpg"
    },
    { 
        numero: 6, 
        titulo: "Água Potável e Saneamento", 
        relato: "Irrigação por gotejamento, captação de água da chuva e reuso reduzem o consumo hídrico. Agricultura conserva nascentes e protege recursos hídricos.",
        imagem: "https://cdn.pixabay.com/photo/2017/08/30/17/38/water-2697898_640.jpg"
    },
    { 
        numero: 7, 
        titulo: "Energia Acessível e Limpa", 
        relato: "Biogás, biomassa e energia solar nas fazendas reduzem custos e emissões. O campo se torna produtor de energia renovável e limpa.",
        imagem: "https://cdn.pixabay.com/photo/2016/12/17/17/16/solar-panels-1913804_640.jpg"
    },
    { 
        numero: 8, 
        titulo: "Trabalho Decente e Crescimento", 
        relato: "Agronegócio responsável oferece empregos formais, segurança no trabalho e renda justa. Movimenta economias regionais e impulsiona o PIB.",
        imagem: "https://cdn.pixabay.com/photo/2017/07/16/15/01/people-2509565_640.jpg"
    },
    { 
        numero: 9, 
        titulo: "Indústria e Inovação", 
        relato: "Drones, sensores IoT, big data e inteligência artificial otimizam o campo. Startups agtech revolucionam a cadeia produtiva com sustentabilidade.",
        imagem: "https://cdn.pixabay.com/photo/2016/09/22/01/58/drone-1686706_640.jpg"
    },
    { 
        numero: 10, 
        titulo: "Redução das Desigualdades", 
        relato: "Programas de inclusão produtiva garantem acesso de pequenos agricultores a mercados, tecnologia e assistência técnica, reduzindo desigualdades históricas.",
        imagem: "https://cdn.pixabay.com/photo/2019/08/17/17/16/farmers-4412298_640.jpg"
    },
    { 
        numero: 11, 
        titulo: "Cidades Sustentáveis", 
        relato: "Agricultura urbana, hortas comunitárias e telhados verdes levam alimentos frescos às cidades, reduzem ilhas de calor e promovem segurança alimentar.",
        imagem: "https://cdn.pixabay.com/photo/2018/03/28/21/11/urban-garden-3270590_640.jpg"
    },
    { 
        numero: 12, 
        titulo: "Consumo e Produção Responsáveis", 
        relato: "Técnicas de produção com baixo desperdício, logística reversa e certificações ambientais garantem uma cadeia do campo à mesa mais sustentável.",
        imagem: "https://cdn.pixabay.com/photo/2019/07/22/07/17/zero-waste-4354885_640.jpg"
    },
    { 
        numero: 13, 
        titulo: "Ação Contra o Clima", 
        relato: "Agricultura regenerativa sequestra carbono no solo, reduz emissões de metano e adota práticas resilientes às mudanças climáticas.",
        imagem: "https://cdn.pixabay.com/photo/2016/11/29/03/24/agriculture-1867212_640.jpg"
    },
    { 
        numero: 14, 
        titulo: "Vida na Água", 
        relato: "Zoneamento agrícola protege nascentes e evita contaminação de rios por defensivos. Sistemas agroflorestais preservam ecossistemas aquáticos.",
        imagem: "https://cdn.pixabay.com/photo/2016/11/14/04/14/ocean-1822638_640.jpg"
    },
    { 
        numero: 15, 
        titulo: "Vida Terrestre", 
        relato: "Corredores ecológicos, recuperação de matas ciliares e integração lavoura-pecuária-floresta protegem a biodiversidade e os biomas brasileiros.",
        imagem: "https://cdn.pixabay.com/photo/2018/08/04/13/32/forest-3583804_640.jpg"
    },
    { 
        numero: 16, 
        titulo: "Paz, Justiça e Instituições", 
        relato: "Regularização fundiária, cadeias produtivas sem trabalho escravo e rastreabilidade garantem justiça social e transparência no campo.",
        imagem: "https://cdn.pixabay.com/photo/2017/05/16/18/47/hand-2318611_640.jpg"
    },
    { 
        numero: 17, 
        titulo: "Parcerias e Implementação", 
        relato: "Governos, empresas e sociedade civil unem forças em programas de desenvolvimento rural sustentável, compartilhando tecnologia e boas práticas.",
        imagem: "https://cdn.pixabay.com/photo/2017/02/21/18/14/partnership-2087175_640.jpg"
    }
];

// Função para gerar os cards flip
function renderODSGrid() {
    const gridContainer = document.getElementById('odsGridContainer');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';
    odsData.forEach(ods => {
        const flipCard = document.createElement('div');
        flipCard.className = 'flip-card';
        
        // Suporte para dispositivos touch
        flipCard.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                this.classList.toggle('touch-flip');
            }
        });
        
        flipCard.innerHTML = `
            <div class="flip-card-inner">
                <!-- FRENTE DO CARD -->
                <div class="flip-card-front">
                    <div class="front-icon">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <div class="front-number">ODS ${ods.numero}</div>
                    <div class="front-title">${ods.titulo}</div>
                    <div class="front-hint">
                        <i class="fas fa-hand-pointer"></i> Passe o mouse ou toque para saber mais
                    </div>
                </div>
                
                <!-- VERSO DO CARD -->
                <div class="flip-card-back">
                    <div class="back-icon">
                        <i class="fas fa-leaf"></i>
                    </div>
                    <div class="back-title">Relato: ${ods.titulo}</div>
                    <img src="${ods.imagem}" alt="${ods.titulo}" class="back-image" loading="lazy" onerror="this.src='https://cdn.pixabay.com/photo/2016/03/09/09/30/plant-1245983_640.jpg'">
                    <div class="back-relato">
                        <i class="fas fa-quote-left"></i> ${ods.relato}
                    </div>
                    <div style="margin-top: 0.8rem; font-size:0.7rem; opacity:0.7;">
                        <i class="fas fa-camera"></i> Imagem: Pixabay (uso livre)
                    </div>
                </div>
            </div>
        `;
        gridContainer.appendChild(flipCard);
    });
}

// Botão voltar ao topo
function initBackToTop() {
    const backBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    });
    
    backBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Alternar tema escuro/claro
function initTheme() {
    const themeBtn = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = localStorage.getItem('theme');

    if (!currentTheme) {
        currentTheme = prefersDark ? 'dark' : 'light';
    }

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        document.body.classList.remove('dark-mode');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
    }

    themeBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        }
    });
}

// Contador animado
function animateCounter() {
    const counterElement = document.getElementById('odsCounter');
    if (!counterElement) return;
    const target = 17;
    let current = 0;
    const interval = setInterval(() => {
        if (current >= target) {
            clearInterval(interval);
            counterElement.textContent = target;
            return;
        }
        current++;
        counterElement.textContent = current;
    }, 35);
}

// Scroll suave para links internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderODSGrid();
    initTheme();
    animateCounter();
    initBackToTop();
    initSmoothScroll();
    
    console.log('🚀 Site Agrinho ODS carregado! Cards flip 3D com relatos e imagens livres.');
});