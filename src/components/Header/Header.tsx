import './Header.scss';
import config from '@/utils/config';
import { network, networkIcons } from './Header.utils';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInDown } from '@/utils/animation';
const Header = () => {
    return (
        <motion.div
            variants={fadeInDown}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.5 }}
            className="Header"
        >
            <div className="Header-logo">
                <img src={`${config.image_base_url}/assets/images/Logo.svg`} alt="page logo" />
                <h2>Pages</h2>
            </div>
            <div className="Header-network">
                {networkIcons.map((item, index) => (
                    <div className="icon-container" key={index}>
                        {item}
                    </div>
                ))}
            </div>
            <HeaderMenuDesktop />
            <HeaderMenuMobile />
        </motion.div>
    );
};

const HeaderMenuDesktop = () => {
    return (
        <ul className="Header-menu hidden sm:flex">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Pages</a>
                <FiChevronDown />
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <p>01</p>
                <img src={`${config.image_base_url}/assets/images/icons/shop.png`} />
            </li>
            <li>
                <button>Order Today </button>
            </li>
        </ul>
    );
};
const HeaderMenuMobile = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="Header-menu-small  flex sm:hidden">
            <AnimatePresence mode="popLayout">
                {showMenu ? (
                    <motion.div
                        key="close"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                    >
                        <MdClose
                            className="drop-shadow-md"
                            color="#FFF"
                            size={28}
                            onClick={() => setShowMenu((prev) => !prev)}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="menu"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                    >
                        <FiMenu color="#FFF" size={28} onClick={() => setShowMenu((prev) => !prev)} />
                    </motion.div>
                )}

                {showMenu && (
                    <motion.ul
                        key="mobile-menu"
                        className="origin-top"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                    >
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Pages</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <p>01</p>
                            <img src={`${config.image_base_url}/assets/images/icons/shop.png`} />
                        </li>
                        <li>
                            <button>Order Today </button>
                        </li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};
export default Header;
