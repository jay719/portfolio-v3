import compsPic from "../images/project2.jpg";
import compPic from "../images/comp.jpg";
import snackPick from "../images/snack-maps.png";
import goatmaps from "../images/goatmaps.png";
import toothbrush from "../images/toothbrush.png";

export const blogItemsData = [
  {
    href: "https://medium.com/@javariab17/unit-testing-vs-end-end-testing-test-caf%C3%A9-mocha-chai-1f718935cfd1",
    date: "Jun 18, 2021",
    time: "3 mins",
    heading: "Unit Testing vs End-end Testing (Test-Café & Mocha/Chai)",
    readText: "Read the article",
    imgSrc: "",
  },
  {
    href: "https://medium.com/@javariab17/setting-up-typescript-for-the-first-time-enabling-errors-a0d1e3c6c083",
    date: "May 14, 2021",
    time: "3 mins",
    heading: "Setting up TypeScript for the First Time/Enabling Errors",
    readText: "Read the article",
    imgSrc: "",
  },
  {
    href: "/blog/top-6-free-website-mockup-tools-2021",
    date: "April 16, 2021",
    time: "5 mins",
    heading: "Top 6 free website mockup tools 2021",
    readText: "Read the article",
    imgSrc: "",
  },
];

export const testimonials = [
  {
    image: "https://example.com/image1.jpg",
    quoteIcon: "https://example.com/quote-icon.svg",
    text: "This product really helped me improve my business!",
    name: "John Doe",
    position: "CEO, Example Company",
  },
  {
    image: "https://example.com/image2.jpg",
    quoteIcon: "https://example.com/quote-icon.svg",
    text: "I can't believe how much this service improved my workflow.",
    name: "Jane Smith",
    position: "Founder, Another Example Company",
  },
  // Add more testimonials as needed
];

export const projectHeadingData = {
  subtext: "PROJECTS",
  heading1: "Personal & Professional",
  heading2: "I love to deliver!",
  button: "View all projects",
  buttonAlt: "Let’s talk now!",
};

export const projectsData = [
  {
    imageUrl: toothbrush,
    projectTitle: "Dental Assitant Mock Up",
    projectTags: ["HTML", "Javascript", "CSS "],
    projectLink: "https://coloradodentalassistant-fab47.web.app/",
  },
  {
    imageUrl: compPic,
    projectTitle: "LookalLookup",
    projectTags: ["React", "Javascript", "CSS "],
    projectLink: "https://coloradodentalassistant-fab47.web.app/",
  },

  {
    imageUrl: snackPick,
    projectTitle: "Snack Maps",
    projectTags: ["HTML", "Javascript", "CSS "],
    projectLink: "https://snack-maps-7.web.app/",
  },
  {
    imageUrl: goatmaps,
    projectTitle: "Goat Planning",
    projectTags: ["V1: React Native", "V2 Flutter"],
    projectLink: "https://coloradodentalassistant-fab47.web.app/",
  },

  // Add more projects as needed
];

export const educationList = [
  {
    title: "Software Developer Program",
    subheading: "Google x MLT",
    timePeriod: "• 2019 - Present",
    link: "https://info.mlt.org/google-mlt-tech-equity-collective-tech-prep",
    icon: "https://example.com/icon.png",
  },
  {
    title: "Full Stack Web Development Certificate",
    subheading: "Flatiron School",
    timePeriod: "• 2020 - 2021",
    link: "https://flatironschool.com/welcome-to-flatiron-school/",
    icon: "https://example.com/icon.png",
  },
  {
    title: "Associate of Science & H.S Diploma",
    subheading: "Pikes Peak State College & Colorado Early Colleges",
    timePeriod: "• 2014 - 2020",
    link: "https://www.pikespeak.edu/",
    icon: "https://example.com/icon.png",
  },
  // More education items...
];

export const workExperienceList = [
  {
    title: "Software Developer",
    subheading: "Google x MLT",
    timePeriod: "• 2019 - Present",
    link: "https://info.mlt.org/google-mlt-tech-equity-collective-tech-prep",
    icon: "https://example.com/icon.png",
  },
  {
    title: "Automation Engineer",
    subheading: "Quantum Metric",
    timePeriod: "• 2021 - 2023",
    link: "https://www.quantummetric.com/",
    icon: "https://example.com/icon.png",
  },
  {
    title: "Senior Service Engineer",
    subheading: "Tek Experts",
    timePeriod: "• 2019 - 2020",
    link: "https://tek-experts.com/",
    icon: "https://example.com/icon.png",
  },
  // More work experience items...
];
