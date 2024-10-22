import MarcusAurelius from "../images/MarcusAureliusOuter.jpeg";
import ToDo from "../images/ToDoOuter.jpg";
import BudgetAllocator from "../images/BudgetAllocatorOuter.jpg";
import { Images } from "./imgData";
export const projectData = [
  {
    id: 1,
    name: "Historical Website",
    category: "Web Application",
    img: MarcusAurelius,
    date: "Nov 28 2023",
    tags: "Frontend",
    images: Images[0],
    objective:
      "The primary objective of the Marcus Aurelius project was to apply and demonstrate my newly acquired skills in HTML and CSS while exploring a topic of personal interest. ",
    tools: "HTML, CSS",
    description: [
      "Marcus Aurelius: History and Meditation is a digital tribute to the life and teachings of one of history's most influential figures. This project seamlessly blends historical narrative with meditative reflections, offering visitors an immersive journey into the Stoic philosophy of Marcus Aurelius. The website is meticulously crafted with a responsive design, ensuring optimal viewing experiences across various devices and screen sizes.",
      "Through carefully curated content, visitors are introduced to the life and reign of Marcus Aurelius, gaining insights into his leadership, principles, and enduring legacy. The website also features excerpts from his famous work, 'Meditations,' inviting contemplation and introspection.  ",
      "Utilizing HTML for structuring content and CSS for styling, the project showcases my proficiency in front-end web development fundamentals. Each element of the website is thoughtfully designed to evoke a sense of reverence for Marcus Aurelius and his timeless wisdom.",
    ],
    link: "https://firstwebpage.s3.jp-tok.cloud-object-storage.appdomain.cloud/Marcus%20Aurelius.html",
    selected:false,
  },
  {
    id: 2,
    name: "ToDo list Application",
    category: "React Application",
    img: ToDo,
    date: "Dec 29 2023",
    tags: "Frontend",
    images: Images[1],
    objective:
      "The React To-Do List project was conceived as a practical application of my newly acquired skills in React.js. With the goal of building a dynamic and user-friendly task management tool, this project served as an opportunity to explore React's component-based architecture and state management capabilities while honing my front-end development skills.",
    tools: "React.js, CSS",
    description: [
      " The React To-Do List is a feature-rich task management application designed to streamline daily productivity. Built on the React.js framework, this project offers users a seamless and intuitive interface for creating, organizing, and managing tasks.",
      " At its core, the application leverages React's component-based structure to modularize and encapsulate various aspects of the user interface, promoting code reusability and maintainability. The dynamic nature of React's state management enables real-time updates and interactive user experiences, enhancing the overall usability of the application.",
      " One of the key highlights of the React To-Do List is its responsive design, ensuring consistent functionality and aesthetic appeal across desktop and mobile devices. By implementing responsive design principles, the application seamlessly adapts to different screen sizes, providing users with a cohesive experience regardless of the device they're using.",
    ],
    selected:false,
  },
  {
    id: 3,
    name: "Company Budget Allocator",
    category: "React Application",
    img: BudgetAllocator,
    date: "Jan 29 2023",
    tags: "Frontend",
    images: Images[2],
    objective:
      "The Company's Budget Allocator project was developed as a part of the IBM Full Stack Software Developer course on Coursera. This project aimed to apply advanced web development concepts, including React.js, Redux, and Bootstrap, to create a comprehensive budget management solution. ",
    tools: "React.js, Bootstrap",
    description: [
      " The Company's Budget Allocator is a robust financial management application designed to streamline budget allocation processes within organizations. Developed using cutting-edge technologies such as React.js, Redux, and Bootstrap, this project represents a culmination of advanced web development techniques learned through the IBM Full Stack Software Developer course on Coursera. ",
      "   At its core, the application harnesses the power of React.js for building interactive user interfaces, Redux for state management, and Bootstrap for responsive and visually appealing designs. This powerful combination of technologies enables seamless data flow, efficient state management, and an intuitive user experience.",
    ],
    selected:false,
  },
];
