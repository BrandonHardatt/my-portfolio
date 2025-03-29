const projects = [
  { name: "Project 1", description: "A cool project about something interesting." },
  { name: "Project 2", description: "Another project showcasing your skills." },
  { name: "Project 3", description: "A side project that you had fun building." },
  { name: "Project 1", description: "A cool project about something interesting." },
  { name: "Project 2", description: "Another project showcasing your skills." },
  { name: "Project 3", description: "A side project that you had fun building." },
];

const projectsContainer = document.getElementById('projects');

projects.forEach(project => {
  const projectDiv = document.createElement('div');
  projectDiv.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
  `;
  projectsContainer.appendChild(projectDiv);
});
