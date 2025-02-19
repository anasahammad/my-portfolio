import Photo from "@/components/Photo";
import Services from "@/components/Services";
import SocialLinks from "@/components/SocialLinks";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full mb-12">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          {/* Text info */}
          <div className="text-center xl:text-left order-2 ">
            <span className="text-xl inline-block overflow-hidden h-8">
              <span className="inline-block transition-transform duration-500 ease-in-out transform">
                <span className="block h-8">Web Developer</span>
              </span>
            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent relative inline-block">
                <span className="absolute -inset-1 bg-accent/20 skew-y-3 -z-10"></span>
                Anas Ahammad
              </span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80 animate-fadeIn">
              I'm a frontend web developer specializing in React.js. I create
              dynamic, responsive user interfaces and have a solid foundation in
              MongoDB, Firebase, Express.js, and Node.js. I'm also familiar with
              Next.js. I focus on clean, efficient code and continuous learning
              to stay updated with the latest trends.
            </p>

            {/* button  and social links */}
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <Link target="blank" href="/Anas Resume.pdf" download={true}>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex gap-2 items-center uppercase hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              <div className="mb-8 xl:mb-0">
                <SocialLinks
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />

      <Services />
    </section>
  );
}
