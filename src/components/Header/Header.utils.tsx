import config from '@/utils/config';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
export const network = [
    `${config.image_base_url}/assets/images/icons/Facebook.png`,
    `${config.image_base_url}/assets/images/icons/Twitter.png`,
    `${config.image_base_url}/assets/images/icons/linkedin.png`,
];

export const networkIcons = [
    <FaFacebookF color="#1B3764" className="text-xs" />,
    <FaTwitter color="#1B3764" className="text-xs" />,
    <FaLinkedinIn color="#1B3764" className="text-xs" />,
];
