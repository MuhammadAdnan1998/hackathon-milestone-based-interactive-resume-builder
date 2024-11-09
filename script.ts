// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  const generateResumeBtn = document.getElementById("generate-resume-btn") as HTMLButtonElement;
  const nameInput = document.getElementById("user-input") as HTMLInputElement;
  const emailInput = document.getElementById("user-email") as HTMLInputElement;
  const phoneInput = document.getElementById("user-phone") as HTMLInputElement;
  const educationInput = document.getElementById("user-Education") as HTMLInputElement;
  const experienceInput = document.getElementById("user-Experience") as HTMLInputElement;
  const skillsInput = document.getElementById("skillsInput") as HTMLInputElement;

  const resumeSection = document.querySelector(".resume") as HTMLElement;
  const skillsList = document.getElementById("skillsList") as HTMLUListElement;

  // Event listener for the "Generate Resume" button
  generateResumeBtn.addEventListener("click", () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const education = educationInput.value;
    const experience = experienceInput.value;
    const skills = skillsInput.value.split(",").map(skill => skill.trim());

    if (name && email && phone && education && experience && skills.length > 0) {
      // Update the resume section with input values
      document.getElementById("name")!.textContent = `Full Name: ${name}`;
      document.getElementById("email")!.textContent = `Email: ${email}`;
      document.getElementById("phone")!.textContent = `Phone: ${phone}`;
      document.getElementById("user-edu")!.textContent = `Education: ${education}`;
      document.getElementById("user-exp")!.textContent = `Experience: ${experience}`;

      // Clear any existing skills and add new ones
      skillsList.innerHTML = "";
      skills.forEach(skill => {
        const listItem = document.createElement("li");
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
      });

      // Display the resume section
      resumeSection.style.display = "block";
    } else {
      alert("Please fill out all fields.");
    }
  });
});
