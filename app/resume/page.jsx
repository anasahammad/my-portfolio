"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaServer,
  FaStripe,
} from "react-icons/fa";
import {
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

//about
const about = {
  title: "About Me",
  description:
    " I am Anas Ahammad Sarker, a proactive web developer proficient in React.js and Next.js. With expertise in MongoDB, Firebase, Express.js, and Node.js, I craft dynamic web applications and am available for freelance projects.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anas Ahammad Sarker",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 16080 05838",
    },
    {
      fieldName: "Email",
      fieldValue: "anasahammad2002@gmail.com",
    },
    {
      fieldName: "Date of Birth",
      fieldValue: "17 Aug 2002",
    },
    {
      fieldName: "Blood Group",
      fieldValue: "B(+v) positive",
    },
    {
      fieldName: "Remote",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Bengali, English",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
  ],
};

//experience

const experience = {
  icon: "/assets/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I am a dedicated web developer specializing in frontend technologies, with extensive experience in React.js and Next.js. My skills also include a solid understanding of MongoDB, Firebase, Express.js, and Node.js, allowing me to create dynamic and efficient web applications.",
  items: [
    {
      company: "Rowshan Ara School",
      position: "Assistant Math Teacher",
      duration: "2023 - present",
    },
    {
      company: "Comming soon...",
      position: "Full-Stuck Developer",
      duration: "2024 - present",
    },
  ],
};
//Education

const education = {
  icon: "/assets/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Currently pursuing BSS Hons in Economics at Govt. Tolaram College (2023-2027). Completed Full Stack Web Development at Programming Hero (2024) and Responsive Web Design at Free CodeCamp (2023).",
  items: [
    {
      institution: "Programming Hero",
      degree: "Full Stack Web Development",
      duration: "2024",
    },
    {
      institution: "Free CodeCamp",
      degree: "Responsive Web Design",
      duration: "Winter 2023",
    },
    {
      institution: "Govt. Tolaram College, Narayangang",
      degree: "BSS Hons at Dept. of Economics",
      duration: "2023 - 2027",
    },
    {
      institution: "Dr. Mosharraf Foundation College",
      degree: "Higher Secondary Certificate",
      duration: "2020-2021",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I am a dedicated web developer specializing in frontend technologies, with extensive experience in React.js and Next.js. My skills also include a solid understanding of MongoDB, Firebase, Express.js, and Node.js, allowing me to create dynamic and efficient web applications.",
  skillLists: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaServer />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaStripe />,
      name: "stripe",
    },
  ],
};
const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] lg:mb-10 flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col gap-6 w-ful max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh]  w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-bold">{experience.title}</h1>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:justify-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h1 className="text-xl max-w-[260px] min-h-[60px] text-center xl:text-left ">{item.position}</h1>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-bold">{education.title}</h1>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:justify-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h1 className="text-xl max-w-[260px] min-h-[60px] text-center xl:text-left ">{item.degree}</h1>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillLists.map((skill, idx)=> {
                        return (
                            <li key={idx}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] 
                                        bg-[#232329] rounded-xl flex justify-center items-center group ">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </li>
                        )
                    })}
                </ul>
            </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  mx-auto xl:mx-0 ">
                    {about.info.map((item, idx)=>{
                        return (
                            <li key={idx} className="flex justify-center items-center xl:justify-start gap-4">
                                <span className="text-white/60">{item.fieldName}</span>
                                <span className="text-xl ">{item.fieldValue}</span>
                            </li>
                        )
                    })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
