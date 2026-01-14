// Carregar todas as promoções na página de promoções
document.addEventListener('DOMContentLoaded', () => {
    loadAllPromocoes();
});

function loadAllPromocoes() {
    const container = document.getElementById('promocoesFullGrid');
    if (!container) return;

    // Mesmos dados do script.js, mas você pode carregar de uma API ou arquivo JSON
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
        },
        {
            id: 7,
            title: "Tóquio Moderna",
            description: "Descubra a cultura japonesa com voo e hotel em Shibuya.",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
            priceOld: "73.700 MT",
            priceNew: "57.000 MT",
            badge: "23% OFF",
            validUntil: "2024-12-10"
        },
        {
            id: 8,
            title: "Santorini Grega",
            description: "Pôr do sol inesquecível em Santorini com voo e hotel com vista para o mar.",
            image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop",
            priceOld: "60.300 MT",
            priceNew: "46.800 MT",
            badge: "22% OFF",
            validUntil: "2024-11-15"
        },
        {
            id: 9,
            title: "Londres Clássica",
            description: "Explore a capital britânica com voo e hotel no centro de Londres.",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
            priceOld: "33.500 MT",
            priceNew: "23.400 MT",
            badge: "30% OFF",
            validUntil: "2024-12-25"
        }
    ];

    container.innerHTML = promocoesData.map(promocao => `
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
                <p class="promocao-valid" style="font-size: 12px; color: #999; margin-bottom: 15px;">
                    Válido até: ${new Date(promocao.validUntil).toLocaleDateString('pt-PT')}
                </p>
                <button class="promocao-btn" onclick="handleReserva(${promocao.id})">Reservar Agora</button>
            </div>
        </div>
    `).join('');
}

// Função para lidar com reservas
function handleReserva(promocaoId) {
    // Redirecionar para a página principal na seção de contactos
    window.location.href = 'index.html#contactos';
    
    // Preencher formulário automaticamente após redirecionamento
    setTimeout(() => {
        const mensagemField = document.getElementById('mensagem');
        if (mensagemField) {
            mensagemField.value = `Gostaria de reservar uma promoção. ID: ${promocaoId}`;
        }
    }, 1000);
}

