// Get form elements
const resumeForm = document.getElementById('resumeBuilderForm') as HTMLFormElement;
const nameField = document.getElementById('dynamic-name') as HTMLElement;
const emailField = document.getElementById('dynamic-email') as HTMLElement;
const phoneField = document.getElementById('dynamic-phone') as HTMLElement;
const addressField = document.getElementById('dynamic-address') as HTMLElement;
const educationField = document.getElementById('dynamic-education') as HTMLElement;
const experienceField = document.getElementById('dynamic-experience') as HTMLElement;
const skillsField = document.getElementById('dynamic-skills') as HTMLElement;


// Handle Form Submission
resumeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLTextAreaElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

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
function makeEditable(element: HTMLElement) {
  element.addEventListener('click', () => {
    element.setAttribute('contenteditable', 'true');
    element.focus();
  });

  element.addEventListener('blur', () => {
    element.removeAttribute('contenteditable');
  });

  element.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      element.blur();
    }
  });
}
