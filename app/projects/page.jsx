"use client";

import {motion} from "framer-motion"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import { useState } from "react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import SliderBtn from "@/components/SliderBtn";



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

    const handleSlideChange = (swiper)=>{
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]) 
    }
    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0 "
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline number */}
                            <div className="text-8xl font-extrabold leading-none  text-outline">{project.num}</div>
                        </div>

                        {/* project category */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>

                        {/* project description */}
                        <p className="text-white/60">{project.description}</p>

                        {/* stack */}
                        <ul className="flex gap-4">
                            {project.stack.map((item, idx)=> {
                                return <li key={idx}
                                className="text-xl text-accent"
                                >{item.name}
                                 {idx !==project.stack.length -1 && ","}
                                </li>
                            })}
                        </ul>

                        {/* border */}
                        <div className="border border-white/20 "></div>
                        {/* button */}
                        <div className="flex items-center gap-4">
                            {/* live project */}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {/* github link */}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>

                    </div>

                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30}  slidesPerView={1} className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                        >
                            { projects.map((project, idx)=> {
                                return <SwiperSlide key={idx}
                                 className="w-full"
                                >
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black-10 z-10"></div>

                                        {/* image */}
                                        <div className="relative w-full h-full">
                                            <Image alt={project.title} src={project.image} fill className="contain-object"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            }) }

                            {/* sliperbtn */}
                        <SliderBtn containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" BtnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                        
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;