var _a;
(_a = document.getElementById('generateResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var Contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var projects = document.getElementById('projects').value;
    // Generate the resume in HTML format
    var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Contact:</strong> ").concat(Contact, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n\n        <h3>Skills</h3>\n        <ul>").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Projects</h3>\n        <p>").concat(projects, "</p>\n    ");
    // Display the generated resume
    document.getElementById('resume-output').innerHTML = resumeHTML;
});
