// Aumentar interatividade no site
document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ffcc00';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#ff9900';
    });
});
