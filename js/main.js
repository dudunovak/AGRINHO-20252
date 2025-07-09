// Aqui você pode adicionar interatividade, como efeitos ao passar o mouse sobre os botões, ou qualquer outra funcionalidade desejada
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#f39c12';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    });
});