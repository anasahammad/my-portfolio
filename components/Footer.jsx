import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-900 flex items-center flex-col justify-center py-10 gap-4'>
        <div>

          <h1 className="text-4xl font-semibold">Anas<span className="text-accent">.</span></h1>
        </div>
           <div className='flex gap-6'>
                <Link className='hover:text-accent font-semibold  transition-all' href={"/"}>Home</Link>
                <Link className='hover:text-accent font-semibold   transition-all' href={"/resume"}>Resume</Link>
                <Link className='hover:text-accent font-semibold   transition-all' href={"/project"}>Projects</Link>
                <Link className='hover:text-accent font-semibold   transition-all' href={"/contact"}>Contact</Link>
               
           </div>
            
            
           <h3 className="text-accent"><span className='text-xl'>©</span>2024 All Rights Reserved by Anas Ahammad Sarker </h3>
        
        </footer>
    );
};

export default Footer;