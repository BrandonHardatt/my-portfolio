// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Updated Projects
const projects = [
  {
      title: "NL Bus Tours Booking System",
      description: "Developed a TypeScript React solution for tour bookings, using a PostgreSQL backend and AWS Free Tier services to store data and generate email receipts.",
      image: "images/tours.jpg"
  },
  {
      title: "Real-Time Voice Communication (SongFlow Inc.)",
      description: "Implemented a serverless real-time voice feature in a React Remix application using TypeScript and WebRTC – enabling in-browser audio calls.",
      image: "images/webrtc_app.png"
  },
  {
      title: "Health & Rehab Research App",
      description: "Led a team to develop a mobile AI rehab solution using React Native, Python, and Scikit-learn for real-time pose detection.",
      image: "images/rehab_app.gif"
  },
  {
      title: "Weather App (Side Project)",
      description: "A dynamic React app fetching real-time weather data from public APIs and visualizing it with interactive charts.",
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
