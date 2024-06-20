"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaServer} from "react-icons/fa"
import {SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss} from "react-icons/si"

import { motion } from "framer-motion"

//about
const about = {
    
        title : "About Me",
        description : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat veritatis perferendis ipsam qui soluta in sequi amet.",
    info : [

        {
            fieldName : "Name",
            fieldValue: "Anas Ahammad"
        },
        {
            fieldName : "Phone",
            fieldValue: "(+880) 16080 05838"
        },
        {
            fieldName : "Email",
            fieldValue: "anasahammad2002@gmail.com"
        },
        {
            fieldName : "Date of Birth",
            fieldValue: "17 Aug 2002"
        },
        {
            fieldName : "Blood Group",
            fieldValue: "B(+v) positive"
        },
        {
            fieldName : "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName : "Language",
            fieldValue: "Bengali, English"
        },
    ]
    
}

//experience

const experience = {
    icon : "/assets/assets/resume/badge.svg",
    title : "My Experience",
    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat veritatis perferendis ipsam qui soluta in sequi amet.",
    items : [
        {
            company : "Rowshan Ara School",
            position : "Assistant Math Teacher",
            duration : "2023 - present"
        },
        {
            company : "Janina",
            position : "Full-Stuck Developer",
            duration : "2024 - present"
        },
    ]
}
//Education

const education = {
    icon : "/assets/assets/resume/cap.svg",
    title : "My Education",
    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat veritatis perferendis ipsam qui soluta in sequi amet.",
    items : [
        {
            institution : "Programming Hero",
            degree : "Full Stack Web Development",
            duration : "2024"
        },
        {
            institution : "Free CodeCamp",
            degree : "Responsive Web Design",
            duration : "Winter 2023"
        },
        {
            institution : "Govt. Tolaram College, Narayangang",
            degree : "BSS Hons at Dept. of Economics",
            duration : "2023 - 2027"
        },
        {
            institution : "Dr. Mosharraf Foundation College",
            degree : "Higher Secondary Certificate",
            duration : "2020-2021"
        },
        
    ]
}


const skills = {
    title : "My Skills",
    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat veritatis perferendis ipsam qui soluta in sequi amet.",
    skillLists : [
        {
            icon : <FaHtml5/>,
            name : "html 5"
        },
        {
            icon : <FaCss3/>,
            name : "CSS 3"
        },
        {
            icon : <SiTailwindcss/>,
            name : "Tailwind CSS"
        },
        {
            icon : <FaJs/>,
            name : "JavaScript"
        },
        {
            icon : <FaReact/>,
            name : "React.js"
        },
        {
            icon : <SiNextdotjs/>,
            name : "Next.js"
        },
        {
            icon : <FaNodeJs/>,
            name : "Node.js"
        },
        {
            icon : <FaServer/>,
            name : "Express.js"
        },
        {
            icon : <SiMongodb/>,
            name : "MongoDB"
        },
        {
            icon : <SiFirebase/>,
            name : "Firebase"
        },
        {
            icon : <FaFigma/>,
            name : "figma"
        },
    ]
    
}
const ResumePage = () => {
    return (
        <motion.div initial={{opacity : 0}} animate={{opacity : 1}}>
            <h1>
               
            </h1>
        </motion.div>
    );
};

export default ResumePage;