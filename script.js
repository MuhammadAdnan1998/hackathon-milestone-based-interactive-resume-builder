"use strict";
// Function to update the resume fields based on user input
function updateName() {
    var _a;
    const userNameInput = document.getElementById("user-input").value;
    const userEmailInput = document.getElementById("user-email").value;
    const userPhoneInput = document.getElementById("user-phone").value;
    const userEducationInput = document.getElementById("user-Education").value;
    const userExperienceInput = document.getElementById("user-Experience").value;
    if (!userNameInput.trim() || !userEmailInput.trim() || !userPhoneInput.trim() || !userEducationInput.trim()) {
        alert("Please fill in all required fields.");
        return;
    }
    const userResume = document.querySelector(".resume");
    userResume.style.display = "block";
    document.getElementById("name").textContent = userNameInput;
    document.getElementById("email").textContent = userEmailInput;
    document.getElementById("phone").textContent = userPhoneInput;
    document.getElementById("user-edu").textContent = userEducationInput;
    document.getElementById("user-exp").textContent = userExperienceInput;
    const skillsInput = document.getElementById("skillsInput").value;
    const skillsArray = skillsInput.split(",").map((skill) => skill.trim()).filter((skill) => skill.length > 0);
    const listElement = document.getElementById("skillsList");
    listElement.innerHTML = "";
    skillsArray.forEach((skill) => {
        const listItem = document.createElement("li");
        listItem.textContent = skill;
        listElement.appendChild(listItem);
    });
    downloadResume();
    makeSectionsEditable();
    (_a = document.getElementById("generate-link-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", generateShareableLink);
}
// Function to enable downloading the resume as a PDF
function downloadResume() {
    var _a;
    (_a = document.getElementById("download-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
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
        }
        else {
            alert("Resume element not found!");
        }
    });
}
// Function to enable editable sections within the resume
function makeSectionsEditable() {
    const editableElements = document.querySelectorAll("[contenteditable='true']");
    editableElements.forEach((element) => {
        element.addEventListener("input", () => {
            var _a;
            const elementId = element.id;
            const updatedContent = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
            console.log(`Updated ${elementId}: ${updatedContent}`);
        });
    });
}
// Function to generate a shareable link for the resume
function generateShareableLink() {
    var _a;
    const userName = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.textContent;
    if (userName === null || userName === void 0 ? void 0 : userName.trim()) {
        const encodedName = encodeURIComponent(userName.trim());
        const currentUrl = window.location.href.split('?')[0];
        const shareableLink = `${currentUrl}?user=${encodedName}`;
        const linkElement = document.getElementById("shareable-link");
        if (linkElement) {
            linkElement.innerHTML = `<a href="${shareableLink}" target="_blank">${shareableLink}</a>`;
        }
    }
    else {
        alert("Please enter a valid username.");
    }
}
// Initializing the functions once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    (_a = document.getElementById("generate-resume-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", updateName);
    makeSectionsEditable();
});
