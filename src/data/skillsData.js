import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiThealgorithms } from "react-icons/si";

export const frontEnd = [
    {
        id:1,
        icon: FaHtml5,
        name: "HTML"
    },
    {
        id:2,
        icon: FaCss3Alt ,
        name: "CSS"
    },
    {
        id:3,
        icon: IoLogoJavascript,
        name: "JavaScript"
    },
    {
        id:4,
        icon: FaReact,
        name: "React.js"
    },
    {
        id:5,
        icon: SiTailwindcss,
        name : "Tailwindcss"
    },
]

export const backEnd = [
    {
        id:1,
        icon:FaJava,
        name:"Java"
    },
    {
        id:2,
        icon:FaPython,
        name:"Python"
    },
    {
        id:3,
        icon:SiSpring,
        name:"Spring"
    },
    {
        id:4,
        icon:SiSpringboot,
        name:"Spring Boot"
    },
    {
        id:5,
        icon:SiHibernate,
        name:"Hibernate"
    },
    {
        id:6,
        icon:SiMysql,
        name:"MySql"
    },
]

export const deployment = [
    {
        id:1,
        icon:FaDocker,
        name:"Docker"
    },
    {
        id:2,
        icon:SiKubernetes,
        name:"Kubernetes"
    },
]

export const other = [
    {
        id:1,
        icon:SiThealgorithms,
        name:"Data Structures and Algorithms"
    },
    {
        id:2,
        icon:IoLogoFigma,
        name:"Figma"
    }
]