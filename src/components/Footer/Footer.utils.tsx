import config from '@/utils/config';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
export const network = [
    `${config.image_base_url}/assets/images/icons/Facebook.png`,
    `${config.image_base_url}/assets/images/icons/Twitter.png`,
    `${config.image_base_url}/assets/images/icons/linkedin.png`,
];

export const networkIcons = [
    <FaFacebookF color="#fff" className="text-lg sm:text-sm" />,
    <FaTwitter color="#fff" className="text-lg sm:text-sm" />,
    <FaLinkedinIn color="#fff" className="text-lg sm:text-sm" />,
    <FaInstagram color="#fff" className="text-lg sm:text-sm" />,
];

export const exploreList = ['Home', 'About Us', 'Services', 'Appointments', 'Blog', 'Contact Us'];
export const utilityPagesList = [
    'Start here',
    'Style guide',
    '404 not found',
    'Password protected',
    'Licenses',
    'Changelog',
];
export const keepInTouchList = [
    {
        id: 1,
        title: 'address',
        value: '24A Kingston St, Los Vegas NC 28202, USA.',
    },
    {
        id: 1,
        title: 'Mail',
        value: 'support@doctors.com',
    },
    {
        id: 3,
        title: 'Phone',
        value: '(+22) 123 - 4567 - 900',
    },
];
