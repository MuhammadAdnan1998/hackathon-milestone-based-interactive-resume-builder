// Importing html2pdf library type
declare var html2pdf: any;

// Function to update the resume fields based on user input
function updateName(): void {
  const userNameInput = (document.getElementById("user-input") as HTMLInputElement).value;
  const userEmailInput = (document.getElementById("user-email") as HTMLInputElement).value;
  const userPhoneInput = (document.getElementById("user-phone") as HTMLInputElement).value;
  const userEducationInput = (document.getElementById("user-Education") as HTMLInputElement).value;
  const userExperienceInput = (document.getElementById("user-Experience") as HTMLInputElement).value;

  if (!userNameInput.trim() || !userEmailInput.trim() || !userPhoneInput.trim() || !userEducationInput.trim()) {
    alert("Please fill in all required fields.");
    return;
  }

  const userResume = document.querySelector(".resume") as HTMLElement;
  userResume.style.display = "block";

  (document.getElementById("name") as HTMLParagraphElement).textContent = userNameInput;
  (document.getElementById("email") as HTMLParagraphElement).textContent = userEmailInput;
  (document.getElementById("phone") as HTMLParagraphElement).textContent = userPhoneInput;
  (document.getElementById("user-edu") as HTMLParagraphElement).textContent = userEducationInput;
  (document.getElementById("user-exp") as HTMLParagraphElement).textContent = userExperienceInput;

  const skillsInput = (document.getElementById("skillsInput") as HTMLInputElement).value;
  const skillsArray = skillsInput.split(",").map((skill) => skill.trim()).filter((skill) => skill.length > 0);
  const listElement = document.getElementById("skillsList") as HTMLUListElement;
  listElement.innerHTML = "";
  skillsArray.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    listElement.appendChild(listItem);
  });

  downloadResume();
  makeSectionsEditable();
  document.getElementById("generate-link-btn")?.addEventListener("click", generateShareableLink);
}

// Function to enable downloading the resume as a PDF
function downloadResume(): void {
  document.getElementById("download-resume")?.addEventListener("click", () => {
    const resumeElement = document.querySelector(".container");
    if (resumeElement) {
      const opt = {
        margin: 1,
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().from(resumeElement).set(opt).save();
    } else {
      alert("Resume element not found!");
    }
  });
}

// Function to enable editable sections within the resume
function makeSectionsEditable(): void {
  const editableElements = document.querySelectorAll("[contenteditable='true']");
  editableElements.forEach((element) => {
    element.addEventListener("input", () => {
      const elementId = element.id;
      const updatedContent = element.textContent?.trim() || "";
      console.log(`Updated ${elementId}: ${updatedContent}`);
    });
  });
}

// Function to generate a shareable link for the resume
function generateShareableLink(): void {
  const userName = (document.getElementById("name") as HTMLParagraphElement)?.textContent;
  if (userName?.trim()) {
    const encodedName = encodeURIComponent(userName.trim());
    const currentUrl = window.location.href.split('?')[0];
    const shareableLink = `${currentUrl}?user=${encodedName}`;
    const linkElement = document.getElementById("shareable-link");
    if (linkElement) {
      linkElement.innerHTML = `<a href="${shareableLink}" target="_blank">${shareableLink}</a>`;
    }
  } else {
    alert("Please enter a valid username.");
  }
}

// Initializing the functions once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generate-resume-btn")?.addEventListener("click", updateName);
  makeSectionsEditable();
});
