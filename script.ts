var html2pdf: any;
function updateName(): void {

  const userNameInput = (
    document.getElementById("user-input") as HTMLInputElement
  ).value;
  const userEmailInput = (
    document.getElementById("user-email") as HTMLInputElement
  ).value;
  const userPhoneInput = (
    document.getElementById("user-phone") as HTMLInputElement
  ).value;
  const userEducationInput = (
    document.getElementById("user-Education") as HTMLInputElement
  ).value;
  const userExperienceInput = (
    document.getElementById("user-Experience") as HTMLInputElement
  ).value;

  if (!userNameInput.trim()) {
    alert("Please enter your name");
    return; 
  }

  if (!userEmailInput.trim()) {
    alert("Please enter your Email");
    return;
  }
  if (!userPhoneInput.trim()) {
    alert("Please enter your Phone");
    return;
  }
  if (!userEducationInput.trim()) {
    alert("Please enter your Education");
    return;
  }


  const userResume = document.querySelector(".resume") as HTMLElement;
  userResume.style.display = "block";

  
  const nameParagraph = document.getElementById("name") as HTMLParagraphElement;
  nameParagraph.textContent = userNameInput;

  const emailParagraph = document.getElementById(
    "email"
  ) as HTMLParagraphElement;
  emailParagraph.textContent = userEmailInput;

  const userPhone = document.getElementById("phone") as HTMLParagraphElement;
  userPhone.textContent = userPhoneInput;

  const userEdu = document.getElementById("user-edu") as HTMLParagraphElement;
  userEdu.textContent = userEducationInput;
  const userExp = document.getElementById("user-exp") as HTMLParagraphElement;
  userExp.textContent = userExperienceInput;

  
  const inputElement = document.getElementById(
    "skillsInput"
  ) as HTMLInputElement;
  const skillsInput = inputElement.value;

  const skillsArray = skillsInput
    .split(",")
    .map((skill) => skill.trim())
    .filter((skill) => skill.length > 0);


  const listElement = document.getElementById("skillsList") as HTMLUListElement;

  
  listElement.innerHTML = "";

  skillsArray.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    listElement.appendChild(listItem);
  });

  function downloadResume(): void {
    const downloadBtn = document.getElementById("download-resume");

    downloadBtn?.addEventListener("click", function () {
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
  downloadResume();
  function makeSectionsEditable(): void {
    const editableElements = document.querySelectorAll(
      "[contenteditable='true']"
    );

   
    editableElements.forEach((element) => {
      element.addEventListener("input", () => {
       
        const elementId = element.id;
        const updatedContent = element.textContent?.trim() || "";

        console.log(`Updated ${elementId}: ${updatedContent}`);
        
      });
    });
  }


  document.addEventListener("DOMContentLoaded", () => {
    makeSectionsEditable();
  });

  function generateShareableLink(): void {

    const userName = (document.getElementById("name") as HTMLParagraphElement)
      ?.textContent;
  
    
    if (userName?.trim()) {
      const encodedName = encodeURIComponent(userName.trim());
      const currentUrl = window.location.href.split('?')[0]; 
      const shareableLink = `${currentUrl}?user=${encodedName}`;
  
      // Display the shareable link
      const linkElement = document.getElementById("shareable-link");
      if (linkElement) {
        linkElement.innerHTML = `<a href="${shareableLink}" target="_blank">${shareableLink}</a>`;
      }
    } else {
      alert("Please enter a valid username.");
    }
  }
  

  document.getElementById("generate-link-btn")?.addEventListener("click", generateShareableLink);
  
}
