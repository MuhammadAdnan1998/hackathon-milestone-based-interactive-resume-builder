// Get form elements
const resumeForm = document.getElementById('resumeBuilderForm') as HTMLFormElement;
const nameField = document.getElementById('dynamic-name') as HTMLElement;
const emailField = document.getElementById('dynamic-email') as HTMLElement;
const phoneField = document.getElementById('dynamic-phone') as HTMLElement;
const addressField = document.getElementById('dynamic-address') as HTMLElement;
const educationField = document.getElementById('dynamic-education') as HTMLElement;
const experienceField = document.getElementById('dynamic-experience') as HTMLElement;
const skillsField = document.getElementById('dynamic-skills') as HTMLElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;
const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;

// Add event listener for form submission
resumeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get input values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLTextAreaElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

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

// Make sections editable on click
function makeEditable(element: HTMLElement) {
  element.addEventListener('click', () => {
    element.setAttribute('contenteditable', 'true');
    element.focus();
  });

  // Save changes when the element loses focus or Enter is pressed
  element.addEventListener('blur', () => {
    element.removeAttribute('contenteditable');
  });

  element.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent adding a new line
      element.blur(); // Trigger blur to save the changes
    }
  });
}

// Make all sections editable
makeEditable(nameField!);
makeEditable(emailField!);
makeEditable(phoneField!);
makeEditable(addressField!);
makeEditable(educationField!);
makeEditable(experienceField!);
makeEditable(skillsField!);

// Add event listener to toggle the visibility of the skills section
toggleSkillsBtn.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleSkillsBtn.textContent = 'Hide Skills Section';
  } else {
    skillsSection.style.display = 'none';
    toggleSkillsBtn.textContent = 'Show Skills Section';
  }
});
