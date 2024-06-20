
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

export default function Home() {
  return (
   <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
        {/* Text info */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Web Depeloper</span>
          <h1 className="h1 mb-6">
            Hello I'am <br /> <span className="text-accent">Anas Ahammad</span>
          </h1>
          <p className="max-w-[600px] mb-9 text-white/80">I'm a frontend web developer specializing in React.js. I create dynamic, responsive user interfaces and have a solid foundation in MongoDB, Firebase, Express.js, and Node.js. I'm also familiar with Next.js. I focus on clean, efficient code and continuous learning to stay updated with the latest trends.</p>

            {/* button  and social links */}
        <div className="flex flex-col xl:flex-row gap-8 items-center">
          <Button variant="outline"
            size="lg"
            className="flex gap-2 items-center uppercase"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl"/>
          </Button>

          <div className="mb-8 xl:mb-0">
            <SocialLinks containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>
        </div>

      

        {/* photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo/>
        </div>
      </div>
    </div>
    <Stats/>
   </section>
  );
}
