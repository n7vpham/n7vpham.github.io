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

function resetForm() {
    const introForm = document.getElementById('introForm');
    introForm.innerHTML = `
            <label for="name">Name:</label>
            <input type="text" id="name" value="John Doe" required class="input-field">

            <label for="mascot">Mascot:</label>
            <input type="text" id="mascot" value="Prawn" required class="input-field">

            <label for="image">Image:</label>
            <input type="file" id="image" accept="image/png, image/jpeg" required>
            <div id="loadImage"></div>

            <label for="imageCaption">Image Caption:</label>
            <input type="text" id="imageCaption" value="My photo of me" required class="input-field">

            <label for="personalBackground">Personal Background:</label>
            <textarea id="personalBackground" rows="4" required class="input-field">Grew up in the countryside...</textarea>

            <label for="professionalBackground">Professional Background:</label>
            <textarea id="professionalBackground" rows="4" required
            class="input-field">Software Engineer at XYZ...</textarea>

            <label for="academicBackground">Academic Background:</label>
            <textarea id="academicBackground" rows="4" required class="input-field">Studied CS at ABC University...</textarea>

            <label for="webDevBackground">Background in Web Development:</label>
            <textarea id="webDevBackground" rows="4" required
            class="input-field">Started web dev in 2000...</textarea>

            <label for="primaryComputer">Primary Computer Platform:</label>
            <input type="text" id="primaryComputer" value="Windows" required class="input-field">

            <label>Courses currently taking:</label>
            <div id="courses">
                <input type="text" class="course input-field" required>
            </div>
            <button type="button" id="addCourseBtn">Add Course</button>

            <label for="funnyThing">Funny thing?</label>
            <input type="text" id="funnyThing" value="I laugh at dad jokes!" class="input-field">

            <label for="additionalInfo">Anything else?</label>
            <textarea id="additionalInfo" rows="4" class="input-field">I love hiking.</textarea>

            <input type="checkbox" id="agreement" required>
            <label for="agreement">I understand that what is on this page is not password protected and I will not put
                anything here that I don’t want publicly available.</label>

            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
    `;

    const imagePreview = document.getElementById('imagePreview');
    if (imagePreview) {
        imagePreview.innerHTML = '';
    }

    document.getElementById('introText').style.display = 'block';
    
    document.getElementById('introForm').addEventListener('submit', preventSubmit);
    document.getElementById('addCourseBtn').addEventListener('click', addCourse);
}


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
            <a style="background-color:midnightblue; color:white; padding:8px 15px;" href="#" onclick="resetForm()">Reset Form</a>
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
