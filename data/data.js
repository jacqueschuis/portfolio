module.exports.education = [
  {
    institution: "UMass Amherst",
    degree: "Master of Arts",
    subject: "History of Art and Architecture",
    years: "2020 – 2022",
    location: "Amherst, MA, USA",
    specialization: "Ancient Roman Art, Nineteenth Century Art",
    description: [
      "Selected as one of only three students to receive a full scholarship to the Master of Arts program",
      "Recipient of the department's Professional Development Grant in 2021",
    ],
    specialEvent: "Annual Mark Roskill Symposium, 2021",
    specialEventDescription: [
      "Spearheaded all phases in the planning, organization, and execution of the annual Mark Roskill Symposium (MRS) in collaboration with three fellow students",
      "Conceptualized topic for the MRS and secured the keynote speaker from Nova Scotia College of Art and Design and panelists from Amherst College, Smith College, and University of Massachusetts Amherst",
      "Maximized MRS awareness by designing and launching targeted marketing campaigns; created digital and print promotional advertisements, brochures, posters, and flyers",
      "Exceeded fundraising goal for the MRS, generating $4,600 from two grants, six academic departments, and three university organizations",
    ]
  },
  {
    institution: "Furman University",
    degree: "Bachelor of Arts",
    subject: "Studio Art, Art History",
    years: "2014 – 2018",
    location: "Greenville, SC, USA",
    specialization: "Graphic Design, Painting, Photography",
    description: [
      "Served as the Keynote Speaker at Furman Engaged, delivering a presentation on moral relativism to an audience of approximately 50 attendees",
      "Traveled with 15 other students to China for a fully-funded cultural-exchange trip in 2014",
    ],
    specialEvent: null,
    specialEventDescription: null
  },
];

module.exports.work = [
  {
    place: "Bertera Auto Group",
    location: "W. Springfield, MA",
    title: "Digital Marketing Specialist",
    date: "2023 – Present",
    description: [
      "Designed and created 100+ high-quality banners and advertisements each month",
      "Managed relationships with over 20 vendors",
      "Utilized Google Ads, GA4, Facebook Ad Manager, Raven Tools, and Spyfu to monitor performance and analytics",
      "Successfully created and delivered monthly email blasts to a client base of over 2,000 using Kaizen",
      "Managed and maintained 9 websites across Dealer.com, DealerOn, and Sincro",
    ],
  },
  {
    place: "Fleet Feet",
    location: "Longmeadow, MA",
    title: "Marketing and Community Outreach Coordinator",
    date: "2022 – 2023",
    description: [
      "Created captivating social media content and grew audience engagement through targeted campaigns",
      "Maintained and optimized website",
      "Orchestrated impactful events, inspiring dozens of attendees and generating valuable community partnerships",
      "Elevated sales floor with strategic inventory management and visual merchandising",
    ],
  },
  {
    place: "UMass Amherst",
    location: "Amherst, MA",
    title: "Graduate Teaching Assistant",
    date: "2020 – 2022",
    description: [
      "Developed and delivered asynchronous course content for an online class of 30 University Without Walls students",
      "Innovated strategies to integrate technology tools for a newly offered course on the UWW platform",
      "Successfully translated course content and learning goals from a classroom environment to effectively function within an online learning environment by researching and implementing new pedagogical tools",
      "Maintained departmental website and social media, developing content, creating signup sheets, and designing advertisements",
      "Led the production of the department graduation video",
    ],
  },
  {
    place: "Atwood Museum",
    location: "Chatham, MA",
    title: "Curatorial Intern",
    date: "2021",
    description: [
      "Conducted extensive research on historical artifacts, strengthening the quality and accuracy of a 2022 year-long exhibition",
      "Analyzed provenance and creation details of museum collection items",
      "Contributed to the final curation decisions",
    ],
  },
  {
    place: "EtonHouse International School",
    location: "Nanjing, China",
    title: "Teacher—Art and English as an Additional Language",
    date: "2018 – 2020",
    description: [
      "Served as the head English teacher for two early childhood classes and the sole art teacher for the school",
      "Collaborated with team members to design and launch a Reggio-Emilia curriculum",
    ],
  },
];

module.exports.personalProjects = [
  {
    name: "museo",
    screenshot: "/images/museo.png",
    repo: "https://github.com/jacqueschuis/museo",
    liveSite: "https://museo.onrender.com",
    description: [
      "Full-stack Node application with an Express backend and MongoDB",
      "4 interconnected MongoDB data models",
      "MasonryJS, Flickity, VanillaTilt, ImagesLoaded library integration",
      "User authentication through Passport JS",
      "Extensive use of EJS templating with conditionals",
      "Robust JOI data validation",
      "Atlas Search for filtering each type of data and searching app-wide",
      "Responsive design through Bootstrap",
      "Custom CSS for cohesive design",
    ],
    tools: ["MongoDB", "Express", "Node.js"],
  },
  {
    name: "Portfolio",
    screenshot: "/images/portfolio.png",
    repo: "https://github.com/jacqueschuis/portfolio",
    liveSite: "https://j-par.com/",
    description: [
      "React Spring for animations and transitions",
      "Responsive layout through Tailwind CSS",
      "Custom Tailwind theme for style consistency across app",
    ],
    tools: ["NextJS", "Tailwind", "React Spring"],
  },
  {
    name: "Color Generator",
    screenshot: "/images/random-color.png",
    repo: "https://github.com/jacqueschuis/simple-color-generator",
    liveSite: "https://simple-color-generator.vercel.app/",
    description: [
      "DOM manipulation for dynamic page styling based on results",
      "Translation between HEX and RGB systems",
      "Javascript constructor function for handling color generation",
      "Clipboard API integration",
    ],
    tools: ["HTML", "JS", "Bootstrap"],
  },
];

module.exports.frontEndMentor = [
  {
    name: "Tip Calculator",
    screenshot: "/images/tip-calculator.png",
    repo: "https://github.com/jacqueschuis/frontend-mentor/tree/main/tip-calculator",
    liveSite: "https://frontend-mentor-tip-calculator-omega.vercel.app/",
    description: [
      "Custom validation and error handling through regular expressions",
      "Vanilla CSS only",
      "Responsive design through CSS flexbox and grid",
      "Live-updating results through custom event handlers",
    ],
    tools: ["HTML", "CSS", "JS"],
  },
  {
    name: "CSS Landing Page",
    screenshot: "/images/css-landing.png",
    repo: "https://github.com/jacqueschuis/frontend-mentor/tree/main/css-illustration",
    liveSite: "https://frontend-mentor-css-illustration.vercel.app/",
    description: [
      "Exclusively built with vanilla CSS",
      "Brief provided only 4 images; everything else is CSS",
      "Extensive usage of 'calc( )' and CSS flexbox for responsive sizing",
    ],
    tools: ["HTML", "CSS", "JS"],
  },
  {
    name: "Age Calculator",
    screenshot: "/images/age-calculator.png",
    repo: "https://github.com/jacqueschuis/frontend-mentor/tree/main/age-calculator",
    liveSite: "https://frontend-mentor-age-calculator-khaki.vercel.app/",
    description: [
      "Responsive design with custom CSS",
      "Custom data validation and error handling through conditionals",
    ],
    tools: ["HTML", "CSS", "JS"],
  },
];
