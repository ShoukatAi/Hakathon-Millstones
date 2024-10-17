document.getElementById('generateResume')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const Contact = (document.getElementById('contact') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;

    // Generate the resume in HTML format
    const resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Contact:</strong> ${Contact}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Skills</h3>
        <ul>${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Projects</h3>
        <p>${projects}</p>
    `;

    // Display the generated resume
    (document.getElementById('resume-output') as HTMLElement).innerHTML = resumeHTML;
});
