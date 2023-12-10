import config from '@/utils/config';
import './About.scss';
import { motion } from 'framer-motion';
import { list } from './About.utils';
import { fadeInTopLeft, scaleXLeft, staggerContainer } from '@/utils/animation';
import { TypingElement, TypingH2 } from '../AnimatedComponents/AnimatedComponents';
const About = () => {
    return (
        <div className="About">
            <motion.img
                variants={fadeInTopLeft}
                initial="hidden"
                whileInView="show"
                transition={{
                    delay: 0.7,
                }}
                src={`${config.image_base_url}/assets/images/about-image.png`}
                alt="author image"
            />
            <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="About-left"
            >
                {/* <h2>About Author</h2> */}
                <TypingH2 title="About Author" />
                <TypingElement>
                    <span>
                        All the Lorem Ipsum generators on the Internet tend to repeated predefined chunks as necessary,
                    </span>
                    <span>
                        making this the first true value generator on the Internet. It uses a dictionary of over 200
                        Latin
                    </span>
                    <span>words, combined with a handful.</span>
                </TypingElement>
                <ul>
                    {list.map((item) => (
                        <li key={item.id}>
                            <h3>{item.value}</h3>
                            <p>{item.title}</p>
                        </li>
                    ))}
                </ul>
                <motion.div
                    variants={scaleXLeft}
                    initial="hidden"
                    whileInView="show"
                    className="About-info origin-left"
                    transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                    }}
                >
                    <img src={`${config.image_base_url}/assets/images/QR.jpg`} alt="QR_CODE" />
                    <div className="About-info-content">
                        <p className="name">John Abraham , Ph.d</p>
                        <p className="name">
                            Mail : johnabraham@gmail.com <br />
                            Phone : (+2) 123 545 9000
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
export default About;
