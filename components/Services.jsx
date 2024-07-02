import { FaCode, FaReact } from "react-icons/fa";
import { CgWebsite } from 'react-icons/cg';
import { Button } from "./ui/button";
const service = [
    {
        icon:<CgWebsite />,
        title: "Static Website Development",
        description: "This service is perfect for small businesses, personal portfolios, and informational websites that do not need dynamic content. These sites are straightforward, quick, and secure"
    },
    {
        icon:<FaCode />,
        title: "Converting Designs to Code",
        description: "Many customers possess design files but lack the coding abilities needed to transform these designs into functional websites. This service helps bridge that particular gap"
    },
    {
        icon:<FaReact/>,
        title: "Single Page Application",
        description: "SPAs offer a more app-like experience on the web, ideal for applications needing frequent user interaction and dynamic content updates"
    },
]
const Services = () => {
    return (
        <section className="container mx-auto my-16">
            <div className="">
                <div className="flex my-12 gap-3 justify-center items-center">
                <div className="w-5 h-5 rounded-full bg-accent"></div><h2 className="text-center text-3xl font-bold">My Services</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        service.map((item, idx)=> (
                            <div className="text-center " key={idx}>
                                <div className="text-6xl flex justify-center text-accent ">
                                    {item.icon}
                                </div>

                                <div>
                                    <h2 className="text-[22px] font-bold">{item.title}</h2>
                                </div>
                                <div>
                                    <p className="leading-0">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* <div className="flex flex-col justify-center items-center bg-primary">
                <h1 className="text-4xl font-bold">Prepared to turn your ideas into <br /> reality? I'm here to help you.</h1>

                <Button>Contact Me</Button>
            </div> */}
        </section>
    );
};

export default Services;