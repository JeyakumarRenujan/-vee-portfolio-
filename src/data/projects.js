const projects = [
  {
    id: 1,
    title: "Sentiment & Intent Detection in Code-Mixed Text",
    type: "Research Project",
    description:
      "Developed a MuRIL-based multi-task Transformer for Tamil-English code-mixed sentiment, intent, and sarcasm detection. Built a gold-standard dataset through multi-annotator labeling and integrated expressive linguistic features through feature fusion.",
    image: "/projects/sentiment-intent.jpg",
    technologies: [
      "Python",
      "MuRIL",
      "Transformers",
      "PyTorch",
      "NLP",
    ],
    github: "https://github.com/VeeQubit",
    demo: "https://github.com/VeeQubit",
  },
  {
    id: 2,
    title: "Equipment Request Management System",
    type: "Web Application",
    description:
      "Developed a web-based Equipment Request Management System using React, Spring Boot, and MySQL. Enables request submission, approval workflows, tracking, and inventory management. Led a 5-member cross-functional team via Agile Scrum as Project Manager.",
    image: "/projects/ERMS.png",
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "Java",
      "Agile Scrum",
    ],
    github: "https://github.com/VeeQubit",
    demo: "https://github.com/VeeQubit",
  },
  {
    id: 3,
    title: "Artisan Gallery - Full Stack Inventory Management",
    type: "Full Stack Web App",
    description:
      "Full-stack inventory management web application using React.js, Tailwind CSS, Node.js, Express.js, MySQL, and JWT. Features admin authentication, product/category management, inventory tracking, analytics dashboards, and RESTful APIs.",
    image: "/projects/portfolio.png",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
    ],
    github: "https://github.com/VeeQubit",
    demo: "https://github.com/VeeQubit",
  },
  {
    id: 4,
    title: "Me Plus - Freelancer Task Management Platform",
    type: "Web Application",
    description:
      "Lightweight freelancer workspace applying HCI principles. Built with React, TypeScript, Tailwind CSS, Node.js, and Express. Includes client/project management, Kanban/Calendar views, task tracking, live time logging, invoicing, and AI productivity features.",
    image: "/projects/simulator.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "HCI",
    ],
    github: "https://github.com/VeeQubit",
    demo: "https://github.com/VeeQubit",
  },
  {
    id: 5,
    title: "Linkzo Live - Real-time Video Conferencing",
    type: "WebRTC Web App",
    description:
      "Real-time video conferencing web application built with WebRTC, JavaScript, Node.js, Express, and Socket.IO. Enables P2P video/audio calls, live text chat, screen sharing, room conferencing, and mute/camera controls.",
    image: "/projects/linkzo-live.png",
    technologies: [
      "WebRTC",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Socket.IO",
    ],
    github: "https://github.com/VeeQubit",
    demo: "https://github.com/VeeQubit",
  },
  {
    id: 6,
    title: "Dam Safety Monitoring System",
    type: "IoT & Embedded System",
    description:
      "IoT Smart Dam Monitoring system using ESP32 sensors and Node.js backend. Delivers real-time water level data, remote gate control, and predictive analytics that reduced manual inspection time by 95%.",
    image: "/projects/lab-scheduling.jpg",
    technologies: [
      "IoT",
      "ESP32",
      "Node.js",
      "Sensors",
      "Embedded C++",
    ],
    github: "https://github.com/VeeQubit",
    demo: "https://github.com/VeeQubit",
  },
  {
    id: 7,
    title: "Electronic Waste Detection & Classification",
    type: "Deep Learning & CV",
    description:
      "Deep learning computer vision system using YOLO26n to detect and classify 37 categories of electronic waste from camera input. Trained on 7,210 curated images achieving 92.3% precision and 91.9% mAP@50 with a Streamlit eval dashboard.",
    image: "/projects/course-registration.png",
    technologies: [
      "Python",
      "YOLO",
      "PyTorch",
      "Computer Vision",
      "Streamlit",
    ],
    github: "https://github.com/VeeQubit",
    demo: "https://github.com/VeeQubit",
  },
];

export default projects;