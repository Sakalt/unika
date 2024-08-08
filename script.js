document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('text-container');
            data.characters.forEach(character => {
                const span = document.createElement('span');
                span.className = 'custom-char';
                span.innerHTML = character.graphic;
                
                const textElement = document.createElement('span');
                textElement.className = 'kanji';
                textElement.innerHTML = character.char;

                span.appendChild(textElement);
                container.appendChild(span);
            });
        });
});

function toggleCustomClass() {
    const container = document.getElementById('text-container');
    container.classList.toggle('custom-class');
    container.classList.toggle('hide-text');
    
    // 疑似漢字表示のトグルに合わせて漢字を消す
    document.querySelectorAll('.kanji').forEach(element => {
        element.style.display = container.classList.contains('hide-text') ? 'none' : 'inline';
    });
}
