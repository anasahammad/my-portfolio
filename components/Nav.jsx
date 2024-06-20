"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


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
const Nav = () => {
    const pathname = usePathname()
    console.log(pathname);
    
    return (
        <nav className="flex gap-8">
            {navLinks?.map((link, idx)=><Link href={link.path} key={idx} className={`capitalize ${link.path === pathname && "text-accent border-b-2 border-accent "} font-medium hover:text-accent transition-all`}>
            {link.title}
            </Link>)}
        </nav>
    );
};

export default Nav;