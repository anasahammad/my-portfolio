"use client";

import {motion} from "framer-motion"
import {swiper, SwiperSlide} from "swiper/react"

import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import { useState } from "react";


const projects = [
    {
        num: "01",
        category : "frontend",
        title : "project 1",
        description : "akdjfkdjfkald jfkdjfkasljfkld jaojedkfjdk kadjfkdjfkd dfdkfakfkdj",
        stack : [{name: "Html 5"}, {name : "CSS 3"}, {name : "JavaScript"}, {name : "React.js"}],
        image : "/assets/assets/work/thumb1.png",
        live: "",
        github: ""
    },
    {
        num: "02",
        category : "frontend",
        title : "project 1",
        description : "akdjfkdjfkald jfkdjfkasljfkld jaojedkfjdk kadjfkdjfkd dfdkfakfkdj",
        stack : [{name: "Html 5"}, {name : "CSS 3"}, {name : "JavaScript"}, {name : "React.js"}],
        image : "/assets/assets/work/thumb2.png",
        live: "",
        github: ""
    },
]



const Projects = () => {

    const [project, setProject] = useState(projects[0])
    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1}}
        className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0 "
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full">text</div>
                    <div className="w-full">slider</div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;