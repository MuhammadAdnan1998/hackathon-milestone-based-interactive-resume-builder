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
// Add event listener for form submission
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value.split(',');
    // Update resume fields dynamically
    nameField.textContent = name;
    emailField.textContent = email;
    phoneField.textContent = phone;
    addressField.textContent = address;
    // Education and experience can be multi-line entries, so treat them as lists
    educationField.innerHTML = `<li>${education.replace(/\n/g, '</li><li>')}</li>`;
    experienceField.innerHTML = `<li>${experience.replace(/\n/g, '</li><li>')}</li>`;
    // Skills is a comma-separated input, so split and render as a list
    skillsField.innerHTML = skills.map(skill => `<li>${skill.trim()}</li>`).join('');
    // Clear the form after submission
    resumeForm.reset();
});
