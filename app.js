// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Projects Array with Detailed Fields
const projects = [
  {
    title: "NL Bus Tours Booking System",
    gif: "images/tours.jpg",
    problem: "Manual booking was time-consuming and lacked an automated solution for receipts.",
    outcome: "Implemented an AWS-backed system with automated email receipts, cutting manual steps significantly.",
    features: ["React + TypeScript", "AWS Free Tier", "PostgreSQL", "Email receipts", "Driver dashboard"],
    demoLink: "https://www.youtube.com/",
    codeLink: "https://www.youtube.com/",
    details: `This project involved building a robust backend with AWS and PostgreSQL 
    to store and retrieve bookings. We integrated a driver and manager dashboard to handle 
    real-time updates, plus automated email receipts on successful transactions. 
    Ongoing enhancements include analytics for user engagement and a mobile companion app.`
  },
  {
    title: "Real-Time Voice Communication (SongFlow Inc.)",
    gif: "images/webrtc.png",
    problem: "Users needed a hassle-free way to initiate voice calls directly in their browser.",
    outcome: "Serverless real-time voice calls with WebRTC increased user engagement and collaboration.",
    features: ["TypeScript", "React Remix", "WebRTC", "Serverless architecture"],
    demoLink: "#",
    codeLink: "#",
    details: `As a backend developer at SongFlow, I leveraged WebRTC for low-latency, peer-to-peer 
    voice calls. We integrated it seamlessly into a React Remix app, reducing complexities in 
    managing separate communication platforms.`
  },
  {
    title: "Health & Rehab Research App",
    gif: "images/rehab.gif",
    problem: "Physical rehab exercises often lacked real-time feedback for posture correction.",
    outcome: "An AI rehab solution using Python and MediaPipe provides live pose detection feedback.",
    features: ["React Native", "Python + Flask", "Scikit-learn", "MediaPipe ML models"],
    demoLink: "#",
    codeLink: "#",
    details: `Led a team to integrate MediaPipe's pose detection into a React Native mobile app, 
    enabling users to get instant feedback on their form. The system logs progress and provides 
    custom exercise recommendations.`
  },
  {
    title: "Weather App",
    gif: "images/weather.jpg",
    problem: "Existing weather apps were cluttered; users wanted quick data plus interesting visual charts.",
    outcome: "A clean, minimal React app that fetches real-time data from public APIs and visualizes it in charts.",
    features: ["React", "REST API Integration", "Chart.js", "Responsive Layout"],
    demoLink: "#",
    codeLink: "#",
    details: `This side project explores a simpler, more visual approach to weather data. 
    Key challenges included managing multiple API calls and handling different data shapes 
    for charting.`
  }
];

// Simple helper to map features -> devicon classes (when possible)
function getIconHtml(feature) {
  // We'll do basic string matching here. Adjust as needed for your actual features/tech.
  const lower = feature.toLowerCase();

  if (lower.includes("typescript")) {
    // devicon for TypeScript
    return '<i class="devicon-typescript-plain colored"></i>';
  } else if (lower.includes("react")) {
    return '<i class="devicon-react-original colored"></i>';
  } else if (lower.includes("aws")) {
    // There's an AWS icon in devicon: "devicon-amazonwebservices-original"
    return '<i class="devicon-amazonwebservices-original colored"></i>';
  } else if (lower.includes("postgresql")) {
    return '<i class="devicon-postgresql-plain colored"></i>';
  } else if (lower.includes("python")) {
    return '<i class="devicon-python-plain colored"></i>';
  } else if (lower.includes("flask")) {
    return '<i class="devicon-flask-original colored"></i>';
  } else if (lower.includes("node.js")) {
    return '<i class="devicon-nodejs-plain colored"></i>';
  } 
  // fallback to Font Awesome check-circle if we don't recognize the tech
  return '<i class="fa fa-check-circle"></i>';
}

// Dynamically build project cards
const projectSection = document.getElementById('projects');

projects.forEach(proj => {
  // Container
  let projDiv = document.createElement('div');
  projDiv.classList.add('project');

  // Title
  let projTitle = document.createElement('h3');
  projTitle.textContent = proj.title;

  // Project GIF
  let projImg = document.createElement('img');
  projImg.src = proj.gif;
  projImg.alt = proj.title;



  // Problem/Outcome
  let problemPara = document.createElement('p');
  problemPara.textContent = `Problem: ${proj.problem}`;

  let outcomePara = document.createElement('p');
  outcomePara.textContent = `Outcome: ${proj.outcome}`;

  // Key Features bullet list
  let featureHeading = document.createElement('p');
  featureHeading.textContent = "Key Features:";
  let featureList = document.createElement('ul');

  proj.features.forEach(feature => {
    let li = document.createElement('li');
    // Use getIconHtml() to pick the correct icon
    li.innerHTML = `${getIconHtml(feature)} ${feature}`;
    featureList.appendChild(li);
  });

  // "View Demo" & "GitHub" links (placeholders)
  let buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  let demoBtn = document.createElement('a');
  demoBtn.href = proj.demoLink;
  demoBtn.target = "_blank";
  demoBtn.textContent = "View Demo";
  demoBtn.classList.add('more-btn');

  let codeBtn = document.createElement('a');
  codeBtn.href = proj.codeLink;
  codeBtn.target = "_blank";
  codeBtn.textContent = "View Code";
  codeBtn.classList.add('more-btn');
  codeBtn.style.marginLeft = '10px';

  buttonContainer.appendChild(demoBtn);
  buttonContainer.appendChild(codeBtn);

  // Collapsible "More Details"
  let moreDetailsDiv = document.createElement('div');
  moreDetailsDiv.classList.add('details');
  let detailsPara = document.createElement('p');
  detailsPara.textContent = proj.details;
  moreDetailsDiv.appendChild(detailsPara);

  // "Show More" button
  let toggleBtn = document.createElement('button');
  toggleBtn.textContent = 'Show More';
  toggleBtn.classList.add('more-btn');

  toggleBtn.addEventListener('click', function() {
    if (moreDetailsDiv.style.display === 'none' || moreDetailsDiv.style.display === '') {
      moreDetailsDiv.style.display = 'block';
      toggleBtn.textContent = 'Show Less';
    } else {
      moreDetailsDiv.style.display = 'none';
      toggleBtn.textContent = 'Show More';
    }
  });

  // Append everything
  projDiv.appendChild(projTitle);
  projDiv.appendChild(projImg);
  projDiv.appendChild(problemPara);
  projDiv.appendChild(outcomePara);
  projDiv.appendChild(featureHeading);
  projDiv.appendChild(featureList);
  projDiv.appendChild(buttonContainer);
  projDiv.appendChild(toggleBtn);
  projDiv.appendChild(moreDetailsDiv);

  // Finally, add to #projects
  projectSection.appendChild(projDiv);
});
