"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci'


const navLinks = [
    {
        title: "home",
        path: "/"
    },
    {
        title: "resume",
        path: "/resume"
    },
    {
        title: "projects",
        path: "/projects"
    },
    {
        title: "contact",
        path: "/contact"
    },
]
const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
           <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
           </SheetTrigger>
           <SheetContent className="flex flex-col">
                {/* logo */}
                <div className=" mb-4 text-2xl ">
                    <Link href="/">
                    <h1 className="text-4xl font-semibold">Anas<span className="text-accent">.</span></h1>
                    </Link>
                </div>
                {/* nav links */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {navLinks?.map((link, idx)=> {
                        return (
                            <Link href={link.path} key={idx} className={`text-xl capitalize hover:text-accent transition-all ${link.path === pathname && 'text-accent border-b-2 border-accent'}`}>{link.title}</Link>
                        )
                    })}
                </nav>
           </SheetContent>
        </Sheet>
    );
};

export default MobileNav;