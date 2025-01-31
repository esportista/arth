// Script para funcionalidades interativas se necessário
// Exemplo de um efeito simples para o menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ffcc00';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    });
});
