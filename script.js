document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('text-container');
            data.characters.forEach(character => {
                const span = document.createElement('span');
                span.className = 'custom-char';
                span.textContent = character.char;

                const svgWrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svgWrapper.setAttribute('viewBox', '0 0 100 100');
                svgWrapper.innerHTML = character.graphic;

                span.appendChild(svgWrapper);
                container.appendChild(span);
            });
        });
});

function toggleCustomClass() {
    const container = document.getElementById('text-container');
    container.classList.toggle('custom-class');
}
