function addHero() {
    const heroesDiv = document.getElementById('heroes');
    const heroInput = document.createElement('input');
    heroInput.type = 'text';
    heroInput.className = 'hero';
    heroInput.required = true;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        heroesDiv.removeChild(heroInput);
        heroesDiv.removeChild(deleteButton);
    };

    heroesDiv.appendChild(heroInput);
    heroesDiv.appendChild(deleteButton);
}

document.getElementById('addHeroBtn').addEventListener('click', addHero);
