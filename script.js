// Function to update the resume fields based on user input
function updateName() {
    var _a;
    var userNameInput = document.getElementById("user-input").value;
    var userEmailInput = document.getElementById("user-email").value;
    var userPhoneInput = document.getElementById("user-phone").value;
    var userEducationInput = document.getElementById("user-Education").value;
    var userExperienceInput = document.getElementById("user-Experience").value;
    if (!userNameInput.trim() || !userEmailInput.trim() || !userPhoneInput.trim() || !userEducationInput.trim()) {
        alert("Please fill in all required fields.");
        return;
    }
    var userResume = document.querySelector(".resume");
    userResume.style.display = "block";
    var nameParagraph = document.getElementById("name");
    nameParagraph.textContent = userNameInput;
    var emailParagraph = document.getElementById("email");
    emailParagraph.textContent = userEmailInput;
    var userPhone = document.getElementById("phone");
    userPhone.textContent = userPhoneInput;
    var userEdu = document.getElementById("user-edu");
    userEdu.textContent = userEducationInput;
    var userExp = document.getElementById("user-exp");
    userExp.textContent = userExperienceInput;
    var inputElement = document.getElementById("skillsInput");
    var skillsInput = inputElement.value;
    var skillsArray = skillsInput.split(",").map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill.length > 0; });
    var listElement = document.getElementById("skillsList");
    listElement.innerHTML = "";
    skillsArray.forEach(function (skill) {
        var listItem = document.createElement("li");
        listItem.textContent = skill;
        listElement.appendChild(listItem);
    });
    // Adding event listeners for download and link generation
    downloadResume();
    makeSectionsEditable();
    (_a = document.getElementById("generate-link-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", generateShareableLink);
}
// Function to enable downloading the resume as a PDF
function downloadResume() {
    var downloadBtn = document.getElementById("download-resume");
    downloadBtn === null || downloadBtn === void 0 ? void 0 : downloadBtn.addEventListener("click", function () {
        var resumeElement = document.querySelector(".container");
        if (resumeElement) {
            var opt = {
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
    var editableElements = document.querySelectorAll("[contenteditable='true']");
    editableElements.forEach(function (element) {
        element.addEventListener("input", function () {
            var _a;
            var elementId = element.id;
            var updatedContent = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
            console.log("Updated ".concat(elementId, ": ").concat(updatedContent));
        });
    });
}
// Function to generate a shareable link for the resume
function generateShareableLink() {
    var _a;
    var userName = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.textContent;
    if (userName === null || userName === void 0 ? void 0 : userName.trim()) {
        var encodedName = encodeURIComponent(userName.trim());
        var currentUrl = window.location.href.split('?')[0];
        var shareableLink = "".concat(currentUrl, "?user=").concat(encodedName);
        var linkElement = document.getElementById("shareable-link");
        if (linkElement) {
            linkElement.innerHTML = "<a href=\"".concat(shareableLink, "\" target=\"_blank\">").concat(shareableLink, "</a>");
        }
    }
    else {
        alert("Please enter a valid username.");
    }
}
// Initializing the functions once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    makeSectionsEditable();
});
