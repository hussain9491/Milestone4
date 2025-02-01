
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = () => {
    const form = document.getElementById('resumeForm');
    const outputPersonalInfo = document.getElementById('outputPersonal');
    const outputEducation = document.getElementById('outputEducation');
    const outputWorkExperience = document.getElementById('outputWorkExperience');
    const outputSkills = document.getElementById('outputSkills');
    // Function to dynamically generate resume data based on form inputs
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        // Get form values
        const personalInfo = document.getElementById('personalInfo').value;
        const education = document.getElementById('education').value;
        const workExperience = document.getElementById('workExperience').value;
        const skills = document.getElementById('skills').value;
        // Update the resume output dynamically
        outputPersonalInfo.textContent = personalInfo;
        outputEducation.textContent = education;
        outputWorkExperience.textContent = workExperience;
        outputSkills.textContent = skills;
    });
    // Function to enable in-place editing of resume fields
    const makeEditable = (element) => {
        element.addEventListener('click', () => {
            if (element.isContentEditable)
                return; // If already in edit mode, do nothing
            element.contentEditable = 'true'; // Make the section editable
            element.classList.add('editing'); // Add editing class for styling
            element.focus(); // Focus the element for editing
            // Save changes when user clicks outside the element or presses Enter
            const saveChanges = (event) => {
                if (event.key === 'Enter' || event.type === '') {
                    element.contentEditable = 'false'; // Disable editing mode
                    element.classList.remove('editing'); // Remove editing style
                    element.removeEventListener('blur', saveChanges);
                    element.removeEventListener('keydown', saveChanges);
                }
            };
            element.addEventListener('blur', saveChanges);
            element.addEventListener('keydown', saveChanges);
        });
    };
    // Attach the editable functionality to each resume section
    makeEditable(outputPersonalInfo);
    makeEditable(outputEducation);
    makeEditable(outputWorkExperience);
    makeEditable(outputSkills);
};
export {};
