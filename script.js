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
const skillsSection = document.getElementById('skills-section');
const toggleSkillsBtn = document.getElementById('toggle-skills-btn');
const copyLinkBtn = document.getElementById('copy-link-btn');
const downloadPdfBtn = document.getElementById('download-pdf-btn');
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
    // Generate unique URL for the resume
    const username = name.split(" ").join("").toLowerCase(); // Convert name to a URL-friendly username
    const resumeURL = `${window.location.origin}/${username}/resume`;
    // Display the resume URL
    alert(`Your resume URL: ${resumeURL}`);
    // Optionally, store the resume data in localStorage for persistence
    localStorage.setItem('resumeData', JSON.stringify({
        name, email, phone, address, education, experience, skills
    }));
    // Redirect user to their unique resume page (optional)
    window.history.pushState({}, '', `${username}/resume`);
});
// Make sections editable on click
function makeEditable(element) {
    element.addEventListener('click', () => {
        element.setAttribute('contenteditable', 'true');
        element.focus();
    });
    // Save changes when the element lose focus or Enter is pressed
    element.addEventListener('blur', () => {
        element.removeAttribute('contenteditable');
    });
    element.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent adding a new line
            element.blur(); // Trigger blur to save the changes
        }
    });
}
// Make all sections editable
makeEditable(nameField);
makeEditable(emailField);
makeEditable(phoneField);
makeEditable(addressField);
makeEditable(educationField);
makeEditable(experienceField);
makeEditable(skillsField);
// Add event listener to toggle the visibility of the skills section
toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills Section';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills Section';
    }
});
// Copy resume link to clipboard
copyLinkBtn.addEventListener('click', () => {
    // Extract the username (assuming it's their full name)
    const usernameInput = document.getElementById('name').value;
    // Generate a unique URL using the username (you can modify this to fit your app)
    const formattedUsername = usernameInput.trim().toLowerCase().replace(/\s+/g, '-'); // Replace spaces with hyphens
    const resumeUrl = `${window.location.origin}/${formattedUsername}/resume`;
    // Copy to clipboard
    navigator.clipboard.writeText(resumeUrl).then(() => {
        alert('Resume link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy the link: ', err);
    });
});
// Download resume as PDF using html2pdf.js
downloadPdfBtn.addEventListener('click', () => {
    const resumeElement = document.getElementById('resume-preview');
    if (resumeElement) {
        html2pdf().from(resumeElement).save('resume.pdf');
    }
    else {
        console.error('Resume preview not found.');
    }
});
