// Get form and output elements
var ResumeForm11 = document.getElementById('ResumeForm');
var resumeOutput11 = document.getElementById('ResumeOutput');
var GenerateBtn11 = document.getElementById('generate-resume-btn');
var EditBtn11 = document.getElementById('edit-resume-btn');
// Event listener to generate resume
GenerateBtn11.addEventListener('click', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    // Get user input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Validate form fields (optional, can be improved for custom validation)
    if (!profilePictureInput || !name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    // Generate resume in output div
    resumeOutput11.innerHTML = "\n        <h2>Resume for ".concat(name, "</h2>\n        ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : "", "\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p id=\"educationSection\">").concat(education, "</p>\n        <h3>Experience</h3>\n        <p id=\"experienceSection\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p id=\"skillsSection\">").concat(skills, "</p>\n    ");
    // Make the Edit button visible after generating the resume
    EditBtn11.style.display = 'block';
    // Event listener for the edit button
    EditBtn11.addEventListener('click', function () {
        // Toggle contentEditable attribute for resume sections
        var isEditable = EditBtn11.textContent === 'Edit Resume';
        // Get the sections
        var educationSection = document.getElementById('educationSection');
        var experienceSection = document.getElementById('experienceSection');
        var skillsSection = document.getElementById('skillsSection');
        if (isEditable) {
            // Enable editing
            educationSection.setAttribute('contenteditable', 'true');
            experienceSection.setAttribute('contenteditable', 'true');
            skillsSection.setAttribute('contenteditable', 'true');
            EditBtn11.textContent = 'Save Resume';
        }
        else {
            // Disable editing and save the changes
            educationSection.setAttribute('contenteditable', 'false');
            experienceSection.setAttribute('contenteditable', 'false');
            skillsSection.setAttribute('contenteditable', 'false');
            EditBtn11.textContent = 'Edit Resume';
            // Update the form fields with the edited content
            document.getElementById('education').value = educationSection.textContent || "";
            document.getElementById('experience').value = experienceSection.textContent || "";
            document.getElementById('skills').value = skillsSection.textContent || "";
        }
    });
});
