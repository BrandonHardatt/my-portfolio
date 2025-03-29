// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Dynamic Project Display
const projects = [
  {
      title: "Health and Rehab Research App",
      description: "Led a team developing a mobile app using React Native, Python, and Scikit-learn for full body pose detection and rehabilitation exercises.",
      image: "images/rehab_app.gif"
  },
  {
      title: "VoIP/WebRTC Communication System",
      description: "Built real-time communication features using WebRTC for audio calls. Implemented with React Remix and React Electron using TypeScript.",
      image: "images/webrtc_app.png"
  },
  {
      title: "E-commerce Store",
      description: "Designed a mock e-commerce platform with a fully functional shopping cart and dynamic UI.",
      image: "images/store.jpg"
  },
  {
      title: "Weather App",
      description: "Developed a weather application that fetches real-time data using a public API and displays interactive charts.",
      image: "images/weather.jpg"
  }
];

const projectSection = document.getElementById('projects');

projects.forEach(proj => {
  let projDiv = document.createElement('div');
  projDiv.classList.add('project');

  let projImg = document.createElement('img');
  projImg.src = proj.image;
  projImg.alt = proj.title;

  let projTitle = document.createElement('h3');
  projTitle.textContent = proj.title;

  let projDesc = document.createElement('p');
  projDesc.textContent = proj.description;

  projDiv.appendChild(projImg);
  projDiv.appendChild(projTitle);
  projDiv.appendChild(projDesc);

  projectSection.appendChild(projDiv);
});
