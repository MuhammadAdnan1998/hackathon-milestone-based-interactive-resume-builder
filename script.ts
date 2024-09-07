// const skillsSection = document.getElementById('skills');
// const toggleButton = document.getElementById('toggle-skills');

// toggleButton?.addEventListener('click', () => {
//   if (skillsSection?.style.display === 'none') {
//     skillsSection.style.display = 'block';
//   } else {
//     skillsSection!.style.display = 'none';
//   }
// });


// Select form and resume elements
const resumeForm = document.getElementById('resumeBuilderForm') as HTMLFormElement;
const nameField = document.getElementById('dynamic-name') as HTMLElement;
const emailField = document.getElementById('dynamic-email') as HTMLAnchorElement;
const phoneField = document.getElementById('dynamic-phone') as HTMLElement;
const addressField = document.getElementById('dynamic-address') as HTMLElement;
const educationField = document.getElementById('dynamic-education') as HTMLElement;
const experienceField = document.getElementById('dynamic-experience') as HTMLElement;
const skillsField = document.getElementById('dynamic-skills') as HTMLElement;

resumeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Fetch user inputs
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

  // Update personal information
  nameField.textContent = name;
  emailField.textContent = email;
  emailField.href = `mailto:${email}`;
  phoneField.textContent = phone;
  addressField.textContent = address;

  // Update education section
  educationField.innerHTML = `<li>${education}</li>`;

  // Update experience section
  experienceField.innerHTML = `<li>${experience}</li>`;

  // Update skills section
  skillsField.innerHTML = skills.map(skill => `<li>${skill.trim()}</li>`).join('');
});

// Toggle skills section
const skillsSection = document.getElementById('skills');
const toggleButton = document.getElementById('toggle-skills');

toggleButton?.addEventListener('click', () => {
  if (skillsSection?.style.display === 'none') {
    skillsSection.style.display = 'block';
  } else {
    skillsSection!.style.display = 'none';
  }
});
