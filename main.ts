// Get form and output elements
const ResumeForm11 = document.getElementById('ResumeForm') as HTMLFormElement;
const resumeOutput11 = document.getElementById('ResumeOutput') as HTMLElement;
const GenerateBtn11 = document.getElementById('generate-resume-btn') as HTMLButtonElement;
const EditBtn11 = document.getElementById('edit-resume-btn') as HTMLButtonElement;

// Event listener to generate resume
GenerateBtn11.addEventListener('click', (event: Event) => {
    event.preventDefault();

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    // Get user input values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Validate form fields (optional, can be improved for custom validation)
    if (!profilePictureInput || !name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }

    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

    // Generate resume in output div
    resumeOutput11.innerHTML = `
        <h2>Resume for ${name}</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile picture" class="profilepicture">` : ""}
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p id="educationSection">${education}</p>
        <h3>Experience</h3>
        <p id="experienceSection">${experience}</p>
        <h3>Skills</h3>
        <p id="skillsSection">${skills}</p>
    `;

    // Make the Edit button visible after generating the resume
    EditBtn11.style.display = 'block';

    // Event listener for the edit button
    EditBtn11.addEventListener('click', () => {
        // Toggle contentEditable attribute for resume sections
        const isEditable = EditBtn11.textContent === 'Edit Resume';
        
        // Get the sections
        const educationSection = document.getElementById('educationSection') as HTMLElement;
        const experienceSection = document.getElementById('experienceSection') as HTMLElement;
        const skillsSection = document.getElementById('skillsSection') as HTMLElement;

        if (isEditable) {
            // Enable editing
            educationSection.setAttribute('contenteditable', 'true');
            experienceSection.setAttribute('contenteditable', 'true');
            skillsSection.setAttribute('contenteditable', 'true');
            EditBtn11.textContent = 'Save Resume';
        } else {
            // Disable editing and save the changes
            educationSection.setAttribute('contenteditable', 'false');
            experienceSection.setAttribute('contenteditable', 'false');
            skillsSection.setAttribute('contenteditable', 'false');
            EditBtn11.textContent = 'Edit Resume';

            // Update the form fields with the edited content
            (document.getElementById('education') as HTMLTextAreaElement).value = educationSection.textContent || "";
            (document.getElementById('experience') as HTMLTextAreaElement).value = experienceSection.textContent || "";
            (document.getElementById('skills') as HTMLTextAreaElement).value = skillsSection.textContent || "";
        }
    });
});
