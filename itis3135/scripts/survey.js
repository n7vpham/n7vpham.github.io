function preventSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('image').files[0];
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personalBackground').value;
    const professionalBackground = document.getElementById('professionalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const webDevBackground = document.getElementById('webDevBackground').value;
    const primaryComputer = document.getElementById('primaryComputer').value;
    const courses = document.querySelectorAll('.course');
    const funnyThing = document.getElementById('funnyThing').value;
    const additionalInfo = document.getElementById('additionalInfo').value;
    const agreement = document.getElementById('agreement').checked;

    // Check if it's filled
    if (!name || !mascot || !image || !imageCaption || !personalBackground || !professionalBackground || !academicBackground || !webDevBackground || !primaryComputer || !agreement) {
        alert('Please fill out all required fields.');
        return false;
    }

    // Check if it is a PNG or JPG
    if (image.type !== 'image/png' && image.type !== 'image/jpeg') {
        alert('Please upload a PNG or JPEG image.');
        return false;
    }

    let coursesArray = [];
    courses.forEach(course => {
        if (course.value) {
            coursesArray.push(course.value);
        }
    });

    if (coursesArray.length === 0) {
        alert('Please fill out all required fields.');
        return false;
    }

    displayIntroduction(name, mascot, image, imageCaption, personalBackground, professionalBackground, academicBackground, webDevBackground, primaryComputer, coursesArray, funnyThing, additionalInfo);
}

    const imagePreview = document.getElementById('imagePreview');
    if (imagePreview) {
        imagePreview.innerHTML = '';
    }

    document.getElementById('introText').style.display = 'block';
    
    document.getElementById('introForm').addEventListener('submit', preventSubmit);
    document.getElementById('addCourseBtn').addEventListener('click', addCourse);

function addCourse() {
    const coursesDiv = document.getElementById('courses');
    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.className = 'course';
    courseInput.required = true;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        coursesDiv.removeChild(courseInput);
        coursesDiv.removeChild(deleteButton);
    };

    coursesDiv.appendChild(courseInput);
    coursesDiv.appendChild(deleteButton);
}

function displayIntroduction(name, mascot, image, imageCaption, personalBackground, professionalBackground, academicBackground, webDevBackground, primaryComputer, courses, funnyThing, additionalInfo) {
    const introForm = document.getElementById('introForm');
    introForm.innerHTML = `
        <h2 style="text-align:center;">${name} || ${mascot}</h2>
        <figure style="width:100%;">
            <img style="width:100%;" src="${URL.createObjectURL(image)}" alt="userImg">
            <figcaption style="text-align:center;">${imageCaption}</figcaption>
        </figure>
        <ul class="paragraph">
            <li><b>Personal Background:</b> ${personalBackground}</li>
            <li><b>Professional Background:</b> ${professionalBackground}</li>
            <li><b>Academic Background:</b> ${academicBackground}</li>
            <li><b>Background in this Subject:</b> ${webDevBackground}</li>
            <li><b>Primary Computer Platform:</b> ${primaryComputer}</li>
            <li>
                <b>Courses I'm Taking & Why:</b>
                <ul class="paragraph">
                    ${courses.map(course => `<li>${course}</li>`).join('')}
                </ul>
            </li>
            <li><b>Funny/Interesting Item to Remember me by:</b> ${funnyThing}</li>
            <li><b>I'd also like to Share:</b> ${additionalInfo}</li>
        </ul>
        <div style="text-align:center;">
            <a style="background-color:midnightblue; color:white; padding:8px 15px;" href="./byo_intro.html" onclick="resetForm()">Reset Form</a>
        </div>
    `;
    
    const imagePreview = document.getElementById('imagePreview');
    if (imagePreview) {
        imagePreview.innerHTML = '';
    }

    document.getElementById('introText').style.display = 'none';
}

document.getElementById('introForm').addEventListener('submit', preventSubmit);
document.getElementById('addCourseBtn').addEventListener('click', addCourse);
