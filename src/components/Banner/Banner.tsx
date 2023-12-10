import config from '@/utils/config';
import Header from '../Header/Header';
import './Banner.scss';
import { list } from './Banner.utils';
import { motion } from 'framer-motion';
import { fadeIn, slideLeft, slideRight, staggerContainer, zoomIn } from '@/utils/animation';
import { TypingH1 } from '../AnimatedComponents/AnimatedComponents';
const Banner = () => {
    return (
        <motion.div className="Banner">
            <Header />
            <div className="Banner-content">
                <motion.div
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="Banner-content-left"
                >
                    <motion.h3 variants={slideRight} initial="hidden" whileInView="show" transition={{ delay: 0.3 }}>
                        Welcome to Pages
                    </motion.h3>
                    <TypingH1 title={`Books are uniquely \n portable magic`} />
                    {/* <motion.h1 variants={textContainer}>
                        {Array.from(`Books are uniquely`).map((letter, index) => (
                            <motion.span variants={textVariant2} key={index}>
                                {letter === ' ' ? '\u00A0' : letter}
                            </motion.span>
                        ))}
                        <br />

                        portable magic
                    </motion.h1> */}
                    <motion.p variants={fadeIn} initial="hidden" whileInView="show" transition={{ delay: 0.4 }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form.
                    </motion.p>
                    <div className="Banner-content-cta">
                        <button>Order Today</button>
                        <button>Read Free Demo</button>
                    </div>
                    <ul className="Banner-content-list">
                        {list.map((item, index) => (
                            <motion.li
                                variants={zoomIn}
                                initial="hidden"
                                whileInView="show"
                                transition={{
                                    delay: index * 0.2,
                                }}
                                key={item.id}
                            >
                                <div className="list-badge" />
                                <div className="list-content">
                                    <h4>{item.title}:</h4>
                                    <p>
                                        {item.value} {item.units}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
                <motion.img
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="show"
                    transition={{
                        delay: 0.2,
                    }}
                    src={`${config.image_base_url}/assets/images/Book_1.jpg`}
                    alt="banner logo"
                />
            </div>
        </motion.div>
    );
};
export default Banner;
