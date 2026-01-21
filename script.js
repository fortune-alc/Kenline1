// Menu Retrátil
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// Galeria de Imagens - Carrossel
const gallerySlider = document.getElementById('gallerySlider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('galleryIndicators');

let currentSlide = 0;
let slideInterval;

// Criar indicadores
if (slides.length > 0 && indicatorsContainer) {
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
}

function showSlide(index) {
    if (!slides.length) return;
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (indicatorsContainer) {
            const indicators = indicatorsContainer.querySelectorAll('.indicator');
            if (indicators[i]) {
                indicators[i].classList.remove('active');
            }
        }
    });

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    
    if (indicatorsContainer) {
        const indicators = indicatorsContainer.querySelectorAll('.indicator');
        if (indicators[currentSlide]) {
            indicators[currentSlide].classList.add('active');
        }
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event listeners para os botões
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlideShow();
        startSlideShow();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlideShow();
        startSlideShow();
    });
}

// Iniciar slideshow automático
if (slides.length > 0) {
    startSlideShow();
    
    // Pausar ao passar o mouse
    if (gallerySlider) {
        gallerySlider.addEventListener('mouseenter', stopSlideShow);
        gallerySlider.addEventListener('mouseleave', startSlideShow);
    }
}

// Carregar Promoções Dinâmicas
const promocoesData = [
    {
        id: 1,
        title: "Lisboa para Paris",
        description: "Voe para a cidade luz com desconto especial. Inclui bagagem de mão.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
        priceOld: "30.150 MT",
        priceNew: "20.000 MT",
        badge: "30% OFF",
        validUntil: "2024-12-31"
    },
    {
        id: 2,
        title: "Pacote Caribe",
        description: "7 dias no paraíso com voo, hotel e café da manhã incluídos.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
        priceOld: "80.400 MT",
        priceNew: "60.000 MT",
        badge: "25% OFF",
        validUntil: "2024-11-30"
    },
    {
        id: 3,
        title: "Nova York Express",
        description: "Fim de semana em Nova York com voo direto e hotel no centro.",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop",
        priceOld: "53.600 MT",
        priceNew: "40.000 MT",
        badge: "LIMITADO",
        validUntil: "2024-10-31"
    },
    {
        id: 4,
        title: "Dubai Luxury",
        description: "Experiência de luxo em Dubai com voo em classe executiva.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
        priceOld: "100.500 MT",
        priceNew: "80.000 MT",
        badge: "20% OFF",
        validUntil: "2024-12-15"
    },
    {
        id: 5,
        title: "Bali Tropical",
        description: "10 dias em Bali com voo, hotel 4 estrelas e traslados.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
        priceOld: "93.800 MT",
        priceNew: "67.000 MT",
        badge: "PROMOÇÃO",
        validUntil: "2024-11-20"
    },
    {
        id: 6,
        title: "Roma Clássica",
        description: "Explore a história de Roma com voo e hotel no centro histórico.",
        image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&h=600&fit=crop",
        priceOld: "36.850 MT",
        priceNew: "26.700 MT",
        badge: "27% OFF",
        validUntil: "2024-12-20"
    }
];

function loadPromocoes(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const promocoesToShow = limit ? promocoesData.slice(0, limit) : promocoesData;

    container.innerHTML = promocoesToShow.map(promocao => `
        <div class="promocao-card">
            <img src="${promocao.image}" alt="${promocao.title}" class="promocao-image">
            <div class="promocao-content">
                <span class="promocao-badge">${promocao.badge}</span>
                <h3 class="promocao-title">${promocao.title}</h3>
                <p class="promocao-desc">${promocao.description}</p>
                <div class="promocao-price">
                    <span class="price-old">${promocao.priceOld}</span>
                    <span class="price-new">${promocao.priceNew}</span>
                </div>
                <button class="promocao-btn" onclick="handleReserva(${promocao.id})">Reservar Agora</button>
            </div>
        </div>
    `).join('');
}

// Carregar promoções na página principal (apenas 3)
if (document.getElementById('promocoesGrid')) {
    loadPromocoes('promocoesGrid', 3);
}

// Função para lidar com reservas
function handleReserva(promocaoId) {
    const promocao = promocoesData.find(p => p.id === promocaoId);
    if (promocao) {
        // Redirecionar para a seção de contactos ou abrir formulário
        window.location.href = '#contactos';
        
        // Preencher formulário automaticamente (opcional)
        setTimeout(() => {
            const mensagemField = document.getElementById('mensagem');
            if (mensagemField) {
                mensagemField.value = `Gostaria de reservar: ${promocao.title}`;
            }
        }, 500);
    }
}

// Formulário de Contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        // Preparar o corpo do email
        const assuntoEmail = encodeURIComponent(`Nova Mensagem do Site KEN LINE TRAVEL AND TOURS: ${assunto}`);
        const corpo = encodeURIComponent(
            `Nome: ${nome}\n` +
            `Email: ${email}\n` +
            `Assunto: ${assunto}\n\n` +
            `Mensagem:\n${mensagem}`
        );

        // Criar link mailto para enviar o email
        const mailtoLink = `mailto:info@kenlinetravel.co.mz?subject=${assuntoEmail}&body=${corpo}`;
        
        // Abrir cliente de email padrão
        window.location.href = mailtoLink;
        
        // Feedback visual
        setTimeout(() => {
            const currentLang = localStorage.getItem('language') || 'pt';
            const message = currentLang === 'en' 
                ? 'Thank you for your message!\n\nYour email client will open to send the message.\n\nPlease confirm sending.'
                : 'Obrigado pela sua mensagem!\n\nO seu cliente de email será aberto para enviar a mensagem.\n\nPor favor, confirme o envio.';
            alert(message);
            contactForm.reset();
        }, 100);
    });
}

// Smooth scroll para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.servico-featured, .servico-card, .promocao-card, .sobre-content, .contactos-content, .contacto-item, .team-member');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// LANGUAGE SWITCHER FUNCTIONALITY
// ============================================

const translations = {
    pt: {
        nav: {
            home: 'Início',
            promotions: 'Promoções',
            about: 'Sobre Nós',
            services: 'Serviços',
            contact: 'Contactos'
        },
        about: {
            title: 'Sobre Nós',
            intro1: 'A <strong>KEN LINE TRAVEL AND TOURS, LDA</strong> é uma empresa especializada em agendamentos de voos, dedicada a proporcionar a melhor experiência de viagem aos nossos clientes. Com anos de experiência no mercado, oferecemos serviços de qualidade e atendimento personalizado.',
            intro2: 'Nossa missão é tornar seus sonhos de viagem realidade, oferecendo as melhores opções de voos para destinos nacionais e internacionais. Trabalhamos com as principais companhias aéreas para garantir conforto, segurança e os melhores preços do mercado.',
            intro3: 'Na KEN LINE, valorizamos cada cliente e nos comprometemos a encontrar a solução perfeita para suas necessidades de viagem. Seja para negócios ou lazer, estamos aqui para tornar sua jornada inesquecível.',
            viewTeam: 'Ver nossa equipa',
            teamTitle: 'A Nossa Equipa',
            team1: {
                name: 'João Silva',
                role: 'Diretor de Operações',
                desc: 'Responsável pela coordenação de voos e gestão de reservas. Garante a eficiência operacional e a satisfação dos clientes.'
            },
            team2: {
                name: 'Maria Santos',
                role: 'Gerente de Atendimento ao Cliente',
                desc: 'Lidera a equipa de atendimento, assegurando suporte personalizado e soluções adaptadas às necessidades de cada cliente.'
            },
            team3: {
                name: 'Carlos Mendes',
                role: 'Especialista em Viagens Internacionais',
                desc: 'Especializado em destinos internacionais, vistos e documentação. Fornece consultoria completa para viagens globais.'
            },
            team4: {
                name: 'Ana Costa',
                role: 'Coordenadora de Pacotes Turísticos',
                desc: 'Desenvolve e coordena pacotes turísticos completos, integrando voos, hospedagem e atividades para experiências memoráveis.'
            }
        },
        contact: {
            title: 'Entre em Contato',
            subtitle: 'Estamos aqui para ajudar você',
            address: {
                title: 'Endereço',
                line1: 'Avenida Agostinho Neto, Número 1152',
                line2: 'Bairro Central - Maputo, Moçambique'
            },
            phone: {
                title: 'Telefone'
            },
            email: {
                title: 'Email'
            },
            hours: {
                title: 'Horário de Atendimento',
                weekdays: 'Segunda a Sexta: 9h - 18h',
                saturday: 'Sábado: 9h - 13h'
            },
            form: {
                name: 'Seu Nome',
                email: 'Seu Email',
                subject: 'Assunto',
                message: 'Sua Mensagem',
                submit: 'Enviar Mensagem'
            }
        }
    },
    en: {
        nav: {
            home: 'Home',
            promotions: 'Promotions',
            about: 'About Us',
            services: 'Services',
            contact: 'Contact'
        },
        about: {
            title: 'About Us',
            intro1: '<strong>KEN LINE TRAVEL AND TOURS, LDA</strong> is a company specialized in flight bookings, dedicated to providing the best travel experience to our clients. With years of market experience, we offer quality services and personalized assistance.',
            intro2: 'Our mission is to make your travel dreams come true, offering the best flight options for national and international destinations. We work with the main airlines to guarantee comfort, security and the best market prices.',
            intro3: 'At KEN LINE, we value each client and commit to finding the perfect solution for your travel needs. Whether for business or leisure, we are here to make your journey unforgettable.',
            viewTeam: 'View our team',
            teamTitle: 'Our Team',
            team1: {
                name: 'John Silva',
                role: 'Operations Director',
                desc: 'Responsible for flight coordination and reservation management. Ensures operational efficiency and customer satisfaction.'
            },
            team2: {
                name: 'Maria Santos',
                role: 'Customer Service Manager',
                desc: 'Leads the customer service team, ensuring personalized support and solutions tailored to each client\'s needs.'
            },
            team3: {
                name: 'Carlos Mendes',
                role: 'International Travel Specialist',
                desc: 'Specialized in international destinations, visas and documentation. Provides comprehensive consulting for global travel.'
            },
            team4: {
                name: 'Ana Costa',
                role: 'Tour Package Coordinator',
                desc: 'Develops and coordinates complete tour packages, integrating flights, accommodation and activities for memorable experiences.'
            }
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'We are here to help you',
            address: {
                title: 'Address',
                line1: 'Avenida Agostinho Neto, Number 1152',
                line2: 'Central Neighborhood - Maputo, Mozambique'
            },
            phone: {
                title: 'Phone'
            },
            email: {
                title: 'Email'
            },
            hours: {
                title: 'Business Hours',
                weekdays: 'Monday to Friday: 9am - 6pm',
                saturday: 'Saturday: 9am - 1pm'
            },
            form: {
                name: 'Your Name',
                email: 'Your Email',
                subject: 'Subject',
                message: 'Your Message',
                submit: 'Send Message'
            }
        }
    }
};

// Language management
let currentLanguage = localStorage.getItem('language') || 'pt';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-PT';
    translatePage();
    updateLanguageButton();
}

function updateLanguageButton() {
    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) {
        langCurrent.textContent = currentLanguage.toUpperCase();
    }
}

function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split('.');
        let translation = translations[currentLanguage];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }
        
        if (translation && typeof translation === 'string') {
            element.textContent = translation;
            // Preserve HTML if needed (for strong tags)
            if (translation.includes('<strong>')) {
                element.innerHTML = translation;
            }
        }
    });
    
    // Handle placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const keys = key.split('.');
        let translation = translations[currentLanguage];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }
        
        if (translation) {
            element.placeholder = translation;
        }
    });
}

// Language switcher UI
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    updateLanguageButton();
    translatePage();
    
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
        
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                setLanguage(lang);
                langDropdown.classList.remove('active');
            });
        });
        
        document.addEventListener('click', () => {
            langDropdown.classList.remove('active');
        });
    }
});

// ============================================
// TEAM EXPAND/COLLAPSE FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const teamToggle = document.getElementById('teamToggle');
    const teamSection = document.getElementById('teamSection');
    
    if (teamToggle && teamSection) {
        teamToggle.addEventListener('click', () => {
            const isExpanded = teamSection.classList.contains('expanded');
            const icon = teamToggle.querySelector('i');
            
            if (isExpanded) {
                // Collapse
                teamSection.classList.remove('expanded');
                teamToggle.setAttribute('aria-expanded', 'false');
                teamSection.setAttribute('aria-hidden', 'true');
                if (icon) icon.style.transform = 'rotate(0deg)';
            } else {
                // Expand
                teamSection.classList.add('expanded');
                teamToggle.setAttribute('aria-expanded', 'true');
                teamSection.setAttribute('aria-hidden', 'false');
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
        
        // Keyboard accessibility
        teamToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                teamToggle.click();
            }
        });
    }
});
