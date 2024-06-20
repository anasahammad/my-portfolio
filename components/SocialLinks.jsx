
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaFacebook, FaTwitter} from "react-icons/fa"

const socialLicks = [
    {icon : <FaGithub/>, path: 'https://github.com/anasahammad'},
    {icon : <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/anasahammad/'},
    {icon : <FaFacebook/>, path: 'https://www.facebook.com/anasahammad.sarker/'},
    {icon : <FaTwitter/>, path: 'https://twitter.com/ahammad_sa95712'},
]
const SocialLinks = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socialLicks?.map((link, idx)=> {
                return <Link href={link.path} key={idx}
                className={iconStyles}
                >{link.icon}</Link>
            })}
        </div>
    );
};

export default SocialLinks;