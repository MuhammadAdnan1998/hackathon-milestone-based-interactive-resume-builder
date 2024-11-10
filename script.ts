var html2pdf: any;

function updateResume(): void {
  const getInputValue = (id: string) => (document.getElementById(id) as HTMLInputElement).value.trim();

  const userName = getInputValue("user-input");
  const userEmail = getInputValue("user-email");
  const userPhone = getInputValue("user-phone");
  const userEducation = getInputValue("user-Education");
  const userExperience = getInputValue("user-Experience");

  if (!userName || !userEmail || !userPhone || !userEducation) {
    alert("Please fill out all required fields");
    return;
  }

  // Display resume
  document.querySelector(".resume")?.classList.add("show");

  // Update resume content
  (document.getElementById("name") as HTMLParagraphElement).textContent = userName;
  (document.getElementById("email") as HTMLParagraphElement).textContent = userEmail;
  (document.getElementById("phone") as HTMLParagraphElement).textContent = userPhone;
  (document.getElementById("user-edu") as HTMLParagraphElement).textContent = userEducation;
  (document.getElementById("user-exp") as HTMLParagraphElement).textContent = userExperience;

  // Display skills as list items
  const skillsList = document.getElementById("skillsList") as HTMLUListElement;
  skillsList.innerHTML = "";
  getInputValue("skillsInput")
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean)
    .forEach((skill) => {
      const listItem = document.createElement("li");
      listItem.textContent = skill;
      skillsList.appendChild(listItem);
    });

  // Download Resume as PDF
  document.getElementById("download-resume")?.addEventListener("click", () => {
    const resumeElement = document.querySelector(".container");
    if (resumeElement) {
      html2pdf().from(resumeElement).set({
        margin: 1,
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      }).save();
    } else {
      alert("Resume element not found!");
    }
  });

  // Editable Sections Logging
  document.querySelectorAll("[contenteditable='true']").forEach((element) => {
    element.addEventListener("input", () => {
      console.log(`Updated ${element.id}: ${(element.textContent || "").trim()}`);
    });
  });

  // Generate Shareable Link
  document.getElementById("generate-link-btn")?.addEventListener("click", () => {
    const userNameEncoded = encodeURIComponent(userName);
    const link = `${window.location.href.split('?')[0]}?user=${userNameEncoded}`;
    const linkElement = document.getElementById("shareable-link");
    if (linkElement) linkElement.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
  });
}

document.addEventListener("DOMContentLoaded", updateResume);
