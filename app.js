// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Example: You can rename or replace these with your real projects
const projects = [
  {
      title: "Health & Rehab Research App",
      description: "Led a team to develop a mobile AI rehab solution using React Native, Python, and Scikit-learn for real-time pose detection.",
      image: "images/rehab_app.gif"
  },
  {
      title: "Real-Time Voice Communication",
      description: "Implemented WebRTC for a React Remix application, enabling serverless audio calls with TypeScript and AWS.",
      image: "images/webrtc_app.png"
  },
  {
      title: "NL Bus Tours Booking System",
      description: "Built a TypeScript React solution for tour bookings, with a PostgreSQL backend for reliable data management.",
      image: "images/tours.jpg"
  },
  {
      title: "Weather App",
      description: "Developed a dynamic React app that fetches real-time weather data and visualizes it with interactive charts.",
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
