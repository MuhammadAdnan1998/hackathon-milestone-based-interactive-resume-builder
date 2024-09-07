"use strict";
// Get form elements
const resumeForm = document.getElementById('resumeBuilderForm');
const nameField = document.getElementById('dynamic-name');
const emailField = document.getElementById('dynamic-email');
const phoneField = document.getElementById('dynamic-phone');
const addressField = document.getElementById('dynamic-address');
const educationField = document.getElementById('dynamic-education');
const experienceField = document.getElementById('dynamic-experience');
const skillsField = document.getElementById('dynamic-skills');
// Handle Form Submission
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value.split(',');
    nameField.textContent = name;
    emailField.textContent = email;
    phoneField.textContent = phone;
    addressField.textContent = address;
    educationField.innerHTML = `<li>${education.replace(/\n/g, '</li><li>')}</li>`;
    experienceField.innerHTML = `<li>${experience.replace(/\n/g, '</li><li>')}</li>`;
    skillsField.innerHTML = skills.map(skill => `<li>${skill.trim()}</li>`).join('');
    resumeForm.reset();
});
// Editable Fields
function makeEditable(element) {
    element.addEventListener('click', () => {
        element.setAttribute('contenteditable', 'true');
        element.focus();
    });
    element.addEventListener('blur', () => {
        element.removeAttribute('contenteditable');
    });
    element.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            element.blur();
        }
    });
}
