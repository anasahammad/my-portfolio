"use client";


import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"

import {motion} from "framer-motion"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

const info = [
    {
        icon : <FaPhoneAlt/>,
        title : "Phone",
        description: "(+880) 160 800 5838" 
    },
    {
        icon : <FaEnvelope/>,
        title : "Email",
        description: "anasahammad2002@gmail.com" 
    },
    {
        icon : <FaMapMarkerAlt/>,
        title : "Address",
        description: "Narayanganj, Dhaka, Bangladesh" 
    },
]
const ContactPage = () => {

    const handleMessage = async (event)=>{
        event.preventDefault()
      
        const formData = new FormData(event.target);

          formData.append("access_key", "7087db30-0abd-41db-98ce-0107817cb29a");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              console.log(result);
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${event.target.firstname.value} ${event.target.lastname.value} ! Thank you for messaging me.`,
                showConfirmButton: false,
                timer: 1500
              });

              event.target.reset()
          }
        
        
    }
    return (
        <motion.section  initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="py-6"
        >
           <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px] ">
                {/* form */}
                <div className="xl:w-[54%] order-2 xl:order-none">
                    <form onSubmit={handleMessage} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">Let's work together</h3>
                        <p className="text-white/60">Reach out for collaborations, projects, or questions. Fill out the form below, and I’ll respond promptly.</p>

                        {/* input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input required name="firstname" type="firstname" placeholder="First name"/>
                            <Input required name="lastname" type="lastname" placeholder="Last name"/>
                            <Input required name="email" type="email" placeholder="Email address"/>
                            <Input required name="phone" type="phone" placeholder="Phone number"/>
                        </div>

                        {/* Text Area */}
                        <Textarea name="message" className="h-[200px] " placeholder="Type your message here.."/>

                        {/* button */}
                        <Button type="submit" size="md" className="max-w-40">Send Message</Button>
                    </form>
                </div>

                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">

                <ul className="flex flex-col gap-10">
                    {info.map((item, idx)=> {
                        return <li key={idx} className="flex items-center gap-6">
                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                <div className="text-[28px]">{item.icon}</div>
                            </div>

                            <div className="flex-1">
                                <p className="text-white/60">{item.title}</p>
                                <h3 className="text-xl">{item.description}</h3>
                            </div>
                        </li>
                    })}
                </ul>
                </div>
            </div>
           </div>
        </motion.section>
    );
};

export default ContactPage;