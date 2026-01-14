# Kenline - Site de Agendamentos de Voos

Site moderno e responsivo para empresa de agendamentos de voos, desenvolvido em blocos com todas as funcionalidades solicitadas.

## 📋 Estrutura do Site

### Página Principal (index.html)
- **Header**: Logo da empresa e menu retrátil
- **Galeria de Imagens**: Carrossel automático com transições suaves
- **Promoções**: Seção dinâmica com as melhores ofertas
- **Sobre Nós**: Informações sobre a empresa
- **Serviços**: Cards com os serviços oferecidos
- **Contactos**: Formulário de contacto e informações
- **Rodapé**: Links, redes sociais e localização

### Página de Promoções (promocoes.html)
- Página dedicada para visualizar todas as promoções
- Fácil atualização através do arquivo `promocoes.json`

## 🚀 Funcionalidades

- ✅ Menu retrátil responsivo
- ✅ Galeria de imagens com transição automática
- ✅ Promoções dinâmicas e atualizáveis
- ✅ Design moderno e responsivo
- ✅ Formulário de contacto funcional
- ✅ Integração com redes sociais
- ✅ Mapa de localização
- ✅ Animações suaves ao scroll

## 📁 Arquivos

- `index.html` - Página principal
- `promocoes.html` - Página de promoções
- `styles.css` - Estilos do site
- `script.js` - JavaScript principal
- `promocoes.js` - JavaScript da página de promoções
- `promocoes.json` - Dados das promoções (para atualização fácil)

## 🎨 Personalização

### Atualizar Promoções
Para atualizar as promoções, edite o arquivo `promocoes.json` ou modifique o array `promocoesData` nos arquivos JavaScript.

### Cores
As cores podem ser alteradas no arquivo `styles.css` através das variáveis CSS:
- `--primary-color`: Cor principal
- `--secondary-color`: Cor secundária
- `--accent-color`: Cor de destaque

### Imagens
As imagens estão usando URLs do Unsplash. Para usar imagens próprias, substitua as URLs nas propriedades `image` dos objetos de promoção.

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Desktop
- Tablet
- Mobile

## 🌐 Navegadores Suportados

- Chrome (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Edge (últimas versões)

## 📝 Notas

- As imagens são carregadas do Unsplash (serviço externo)
- O mapa do Google Maps precisa de uma chave de API para funcionar em produção
- O formulário de contacto atualmente apenas mostra um alerta - pode ser integrado com um backend

## 🔧 Melhorias Futuras

- Integração com API para carregar promoções
- Sistema de backend para formulário de contacto
- Integração com sistema de reservas
- Painel administrativo para gerenciar promoções

