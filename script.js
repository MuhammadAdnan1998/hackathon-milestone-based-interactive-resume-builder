"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener("DOMContentLoaded", () => {
    // Handle the Add More Skills Button
    const addSkillBtn = document.getElementById("add-skill-btn");
    const additionalSkillsContainer = document.getElementById("additional-skills");
    if (addSkillBtn && additionalSkillsContainer) {
        addSkillBtn.addEventListener("click", () => {
            // Create a new input element for adding additional skills
            const skillInput = document.createElement("input");
            skillInput.type = "text";
            skillInput.placeholder = "Enter additional skill";
            additionalSkillsContainer.appendChild(skillInput);
        });
    }
    // Generate Resume Button Logic
    const generateResumeBtn = document.getElementById("generate-resume-btn");
    if (generateResumeBtn) {
        generateResumeBtn.addEventListener("click", () => {
            // Retrieve user input for each section
            const name = document.getElementById("user-input").value;
            const email = document.getElementById("user-email").value;
            const phone = document.getElementById("user-phone").value;
            const education = document.getElementById("user-Education").value;
            const experience = document.getElementById("user-Experience").value;
            const skills = document.getElementById("skillsInput").value;
            // Get additional skills from dynamically created input fields
            const additionalSkills = Array.from(additionalSkillsContainer?.getElementsByTagName("input") || [])
                .map((input) => input.value)
                .filter((value) => value !== "");
            // Update the resume with the user's input
            const nameElement = document.getElementById("name");
            const emailElement = document.getElementById("email");
            const phoneElement = document.getElementById("phone");
            const eduElement = document.getElementById("user-edu");
            const expElement = document.getElementById("user-exp");
            if (nameElement)
                nameElement.textContent = "Full Name: " + name;
            if (emailElement)
                emailElement.textContent = "Email: " + email;
            if (phoneElement)
                phoneElement.textContent = "Phone: " + phone;
            if (eduElement)
                eduElement.textContent = "Education: " + education;
            if (expElement)
                expElement.textContent = "Experience: " + experience;
            // Combine the skills and display them on the resume
            const allSkills = skills.split(",").concat(additionalSkills).filter((skill) => skill !== "");
            const skillsList = document.getElementById("skillsList");
            if (skillsList) {
                skillsList.innerHTML = ""; // Clear any previously displayed skills
                allSkills.forEach((skill) => {
                    const li = document.createElement("li");
                    li.textContent = skill;
                    skillsList.appendChild(li);
                });
            }
            // Show the resume section after generation
            const resumeSection = document.querySelector(".resume");
            if (resumeSection)
                resumeSection.style.display = "block";
        });
    }
});
