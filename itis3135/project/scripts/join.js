function preventSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const friend = document.getElementById('friend').value;
    const image = document.getElementById('image').files[0];
    const personalBackground = document.getElementById('personalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const gamingBackground = document.getElementById('gamingBackground').value;
    const heroes = document.querySelectorAll('.hero');
    const additionalInfo = document.getElementById('additionalInfo').value;
    const agreement = document.getElementById('agreement').checked;

    if (!name || !email || !friend || !image || !personalBackground || !gamingBackground || !agreement) {
        alert('Please fill out all required fields.');
        return false;
    }
    if (image.type !== 'image/png' && image.type !== 'image/jpeg') {
        alert('Please upload a PNG or JPEG image.');
        return false;
    }

    let heroesArray = [];
    heroes.forEach(hero => {
        if (hero.value) {
            heroesArray.push(hero.value);
        }
    });
    if (heroesArray.length === 0) {
        alert('Please fill out all required fields.');
        return false;
    }

    displayIntroduction(name, mascot, image, imageCaption, personalBackground, professionalBackground, academicBackground, webDevBackground, primaryComputer, coursesArray, funnyThing, additionalInfo);
}

function resetForm() {
    // Clear the introduction content and display the form again
    const introForm = document.getElementById('introForm');
    introForm.innerHTML = ``;

    const imagePreview = document.getElementById('imagePreview');
    if (imagePreview) {
        imagePreview.innerHTML = '';
    }

    document.getElementById('introText').style.display = 'block';
    document.getElementById('introForm').addEventListener('submit', preventSubmit);
    document.getElementById('addHeroBtn').addEventListener('click', addHero);
}


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

function displayIntroduction(name, mascot, image, imageCaption, personalBackground, professionalBackground, academicBackground, webDevBackground, primaryComputer, courses, funnyThing, additionalInfo) {
    const introForm = document.getElementById('introForm');
    introForm.innerHTML = `
    `;
    
    const imagePreview = document.getElementById('imagePreview');
    if (imagePreview) {
        imagePreview.innerHTML = '';
    }

    // Hide Introductory Text
    document.getElementById('introText').style.display = 'none';
}

document.getElementById('introForm').addEventListener('submit', preventSubmit);
document.getElementById('addHeroBtn').addEventListener('click', addHero);
