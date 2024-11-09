var html2pdf: any;


document.addEventListener("DOMContentLoaded", () => {
  // Handle the Add More Skills Button
  const addSkillBtn: HTMLElement | null = document.getElementById("add-skill-btn");
  const additionalSkillsContainer: HTMLElement | null = document.getElementById("additional-skills");

  if (addSkillBtn && additionalSkillsContainer) {
    addSkillBtn.addEventListener("click", () => {
      // Create a new input element for adding additional skills
      const skillInput: HTMLInputElement = document.createElement("input");
      skillInput.type = "text";
      skillInput.placeholder = "Enter additional skill";
      additionalSkillsContainer.appendChild(skillInput);
    });
  }

  // Generate Resume Button Logic
  const generateResumeBtn: HTMLElement | null = document.getElementById("generate-resume-btn");

  if (generateResumeBtn) {
    generateResumeBtn.addEventListener("click", () => {
      // Retrieve user input for each section
      const name: string = (document.getElementById("user-input") as HTMLInputElement).value;
      const email: string = (document.getElementById("user-email") as HTMLInputElement).value;
      const phone: string = (document.getElementById("user-phone") as HTMLInputElement).value;
      const education: string = (document.getElementById("user-Education") as HTMLInputElement).value;
      const experience: string = (document.getElementById("user-Experience") as HTMLInputElement).value;
      const skills: string = (document.getElementById("skillsInput") as HTMLInputElement).value;

      // Get additional skills from dynamically created input fields
      const additionalSkills: string[] = Array.from(additionalSkillsContainer?.getElementsByTagName("input") || [])
        .map((input: HTMLInputElement) => input.value)
        .filter((value: string) => value !== "");

      // Update the resume with the user's input
      const nameElement: HTMLElement | null = document.getElementById("name");
      const emailElement: HTMLElement | null = document.getElementById("email");
      const phoneElement: HTMLElement | null = document.getElementById("phone");
      const eduElement: HTMLElement | null = document.getElementById("user-edu");
      const expElement: HTMLElement | null = document.getElementById("user-exp");

      if (nameElement) nameElement.textContent = "Full Name: " + name;
      if (emailElement) emailElement.textContent = "Email: " + email;
      if (phoneElement) phoneElement.textContent = "Phone: " + phone;
      if (eduElement) eduElement.textContent = "Education: " + education;
      if (expElement) expElement.textContent = "Experience: " + experience;

      // Combine the skills and display them on the resume
      const allSkills: string[] = skills.split(",").concat(additionalSkills).filter((skill: string) => skill !== "");
      const skillsList: HTMLElement | null = document.getElementById("skillsList");

      if (skillsList) {
        skillsList.innerHTML = ""; // Clear any previously displayed skills
        allSkills.forEach((skill: string) => {
          const li: HTMLLIElement = document.createElement("li");
          li.textContent = skill;
          skillsList.appendChild(li);
        });
      }

      // Show the resume section after generation
      const resumeSection: HTMLElement | null = document.querySelector(".resume");
      if (resumeSection) resumeSection.style.display = "block";
    });
  }

  // Download PDF Button Logic
  const downloadResumeBtn: HTMLElement | null = document.getElementById("download-resume");

  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener("click", () => {
      const resumeSection: HTMLElement | null = document.querySelector(".resume");
      if (resumeSection) {
        const options = {
          filename: "resume.pdf", // File name for the PDF
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // PDF settings
        };
        html2pdf().from(resumeSection).set(options).save();
      }
    });
  }

  // Generate Shareable Link Button Logic
  const generateLinkBtn: HTMLElement | null = document.getElementById("generate-link-btn");

  if (generateLinkBtn) {
    generateLinkBtn.addEventListener("click", () => {
      // Create a shareable link (simple example)
      const resumeLink: string = window.location.href; // Can be changed to a dynamic link
      const shareableLinkElement: HTMLElement | null = document.getElementById("shareable-link");

      if (shareableLinkElement) {
        shareableLinkElement.innerHTML = `Share your resume: <a href="${resumeLink}" target="_blank">${resumeLink}</a>`;
      }

      // Copy the link to clipboard
      navigator.clipboard.writeText(resumeLink).then(() => {
        alert("Link copied to clipboard!");
      });
    });
  }
});
