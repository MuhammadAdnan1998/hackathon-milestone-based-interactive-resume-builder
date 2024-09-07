const skillsSection = document.getElementById('skills');
const toggleButton = document.getElementById('toggle-skills');

toggleButton?.addEventListener('click', () => {
  if (skillsSection?.style.display === 'none') {
    skillsSection.style.display = 'block';
  } else {
    skillsSection!.style.display = 'none';
  }
});
