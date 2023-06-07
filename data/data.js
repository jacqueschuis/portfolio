import tipCalculator from "../public/images/tipCalculator.png";
import ageCalculator from "../public/images/ageCalculator.png";
import cssIllustration from "../public/images/cssIllustrationLandingPage.png";
import randomColor from "../public/images/randomColor.png";
import portfolio from "../public/images/portfolio.png";
import museo from "../public/images/museo.png";

module.exports.education = [
  {
    institution: "University of Massachusetts Amherst",
    degree: "Master of Arts",
    subject: "History of Art and Architecture",
    years: "2020 – 2022",
    location: "Amherst, Massachusetts",
    specialization: "Ancient Roman Art, Nineteenth Century Art",
    description: [
      "Selected as one of only three students to receive a full scholarship to the Master of Arts program",
      "Recipient of the department's Professional Development Grant in 2021",
      "Spearheaded all phases in the planning, organization, and execution of the annual Mark Roskill Symposium (MRS) in collaboration with three fellow students",
      "Conceptualized topic for the MRS and secured the keynote speaker from Nova Scotia College of Art and Design and panelists from Amherst College, Smith College, and University of Massachusetts Amherst",
      "Maximized MRS awareness by designing and launching targeted marketing campaigns; created digital and print promotional advertisements, brochures, posters, and flyers",
      "Exceeded fundraising goal for the MRS, generating $4,600 from two grants, six academic departments, and three university organizations",
    ],
  },
  {
    institution: "Furman University",
    degree: "Bachelor of Arts",
    subject: "Studio Art, Art History",
    years: "2014 – 2018",
    location: "Greenville, South Carolina",
    specialization: "Graphic Design, Painting, Photography",
    description: [
      "Served as the Keynote Speaker at Furman Engaged, delivering a presentation on moral relativism to an audience of approximately 50 attendees",
      "Traveled with 15 other students to China for a fully-funded cultural-exchange trip in 2014",
    ],
  },
];

module.exports.work = [
  {
    place: "Bertera Auto Group",
    location: "West Springfield, Massachusetts",
    title: "Digital Marketing Specialist",
    date: "2023 – Present",
    description: [
      "Designed and created 100+ high-quality banners and advertisements each month for 8 dealerships' websites and social media accounts",
      "Managed relationships with over 20 vendors as the primary point of contact, ensuring smooth communication and timely delivery of services",
      "Utilized Google Ads, GA4, Facebook Ad Manager, Raven Tools, and Spyfu to monitor performance and analytics of internal ad campaigns and vendors, ensuring positive ROI",
      "Successfully created and delivered monthly email blasts to a client base of over 2,000 using Kaizen, resulting in increased web traffic and lead generation",
      "Produced creative assets for multiple advertising channels, including PMax, retargeting, display, OTT, and Facebook campaigns, resulting in increased brand awareness and customer acquisition",
      "Effectively managed and maintained websites across Dealer.com, DealerOn, and Sincro for all 8 dealerships, resulting in improved online presence and user experience",
    ],
  },
  {
    place: "Fleet Feet",
    location: "Longmeadow, Massachusetts",
    title: "Marketing and Community Outreach Coordinator",
    date: "2022 – 2023",
    description: [
      "Created captivating social media content and grew audience engagement through targeted campaigns",
      "Maintained and optimized website, delivering smooth user experience and driving growth to both the retail sales floor and external programs",
      "Orchestrated impactful events with medical professionals, running groups, and charities, inspiring dozens of attendees and generating valuable community partnerships",
      "Elevated sales floor with strategic inventory management and implementation of visual merchandising displays",
    ],
  },
  {
    place: "Atwood Museum",
    location: "Chatham, Massachusetts",
    title: "Curatorial Intern",
    date: "2021",
    description: [
      "Conducted extensive research on historical artifacts, strengthening the quality and accuracy of a 2022 year -long exhibition",
      "Analyzed provenance and creation details of museum collection items, elevating the overall depth and context of exhibition texts",
      "Contributed to the final curation decisions, ensuring a cohesive and engaging experience for visitors",
    ],
  },
  {
    place: "University of Massachusetts Amherst",
    location: "Amherst, Massachusetts",
    title: "Graduate Teaching Assistant",
    date: "2020 – 2022",
    description: [
      "Developed and delivered asynchronous course content for an online class of 30 University Without Walls students",
      "Innovated strategies to integrate technology tools for a newly offered course on the UWW platform",
      "Successfully translated course content and learning goals from a classroom environment to effectively function within an online learning environment by researching and implementing new pedagogical tools",
      "Drove engagement across social media platforms and optimized consistency and quality of content to align with department brand",
      "Maintained departmental website, developing content, creating signup sheets, and designing advertisements",
      "Led the production of the department graduation video, coordinating with professors to gather content and using Final Cut Pro to edit footage",
    ],
  },
  {
    place: "EtonHouse International Preschool",
    location: "Nanjing, Jiangsu, China",
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
    screenshot: museo,
    repo: "https://github.com/jacqueschuis/museo",
    liveSite: "https://museo.onrender.com",
    description: [
      "Full-stack application for finding inspiration",
      "4 interconnected data models",
      "MasonryJS, Flickity, VanillaTilt, ImagesLoaded library integration",
      "Robust JOI data validation",
      "Atlas Search querying for filtering each type of data and site-wide search",
      "Built primarily with Bootstrap, but significant amounts of custom CSS was required to style the app",
    ],
    tools: [
      "MongoDB",
      "Atlas Search",
      "Express",
      "EJS",
      "JS",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    name: "Portfolio",
    screenshot: portfolio,
    repo: "https://github.com/jacqueschuis/portfolio",
    liveSite: "/",
    description: [
      "Serverless NextJS app for everything about me",
      "HeadlessUI and GSAP for animations and transitions",
    ],
    tools: ["NextJS", "React", "Tailwind", "HeadlessUI", "GSAP"],
  },
  {
    name: "Random Color Generator",
    screenshot: randomColor,
    repo: "https://github.com/jacqueschuis/simple-color-generator",
    liveSite: "https://jacqueschuis.github.io/simple-color-generator/",
    description: [
      "Widget application for generating random HEX or RGB colors through a Javascript class",
      "Dynamic page styling depending on the color generated",
      "Translation of your random colors between HEX and RGB systems with custom JS functions",
    ],
    tools: ["HTML", "CSS", "JS", "Bootstrap"],
  },
];

module.exports.frontEndMentor = [
  {
    name: "Tip Calculator",
    screenshot: tipCalculator,
    repo: "https://github.com/jacqueschuis/frontend-mentor/tree/main/tip-calculator",
    liveSite: "https://frontend-mentor-tip-calculator-omega.vercel.app/",
    challenge:
      "https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX",
    description: [
      "Tip calculator with custom validation and error handling",
      "Responsive design through CSS flexbox and grid",
      "Live-updating results through custom event handlers",
    ],
    tools: ["HTML", "CSS", "JS"],
  },
  {
    name: "CSS Illustration",
    screenshot: cssIllustration,
    repo: "https://github.com/jacqueschuis/frontend-mentor/tree/main/css-illustration",
    liveSite: "https://frontend-mentor-css-illustration.vercel.app/",
    challenge:
      "https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY",
    description: [
      "Responsive landing page design written completely with vanilla CSS",
      "Extensive usage of 'calc( )' and CSS flexbox for responsive sizing",
    ],
    tools: ["HTML", "CSS", "JS"],
  },
  {
    name: "Age Calculator",
    screenshot: ageCalculator,
    repo: "https://github.com/jacqueschuis/frontend-mentor/tree/main/age-calculator",
    liveSite: "https://frontend-mentor-age-calculator-khaki.vercel.app/",
    challenge:
      "https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q",
    description: [
      "Responsive age calculator widget with custom data validation and error handling",
    ],
    tools: ["HTML", "CSS", "JS"],
  },
];
