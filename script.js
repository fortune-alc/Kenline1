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
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;

        // Preparar o corpo do email
        const assunto = encodeURIComponent('Nova Mensagem do Site KEN LINE TRAVEL AND TOURS');
        const corpo = encodeURIComponent(
            `Nome: ${nome}\n` +
            `Email: ${email}\n` +
            `Telefone: ${telefone || 'Não informado'}\n\n` +
            `Mensagem:\n${mensagem}`
        );

        // Criar link mailto para enviar o email para jalanefortunato@gmail.com
        const mailtoLink = `mailto:jalanefortunato@gmail.com?subject=${assunto}&body=${corpo}`;
        
        // Abrir cliente de email padrão
        window.location.href = mailtoLink;
        
        // Feedback visual
        setTimeout(() => {
            alert('Obrigado pela sua mensagem!\n\nO seu cliente de email será aberto para enviar a mensagem para:\njalanefortunato@gmail.com\n\nPor favor, confirme o envio.');
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
    const animateElements = document.querySelectorAll('.servico-card, .promocao-card, .sobre-content, .contactos-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

