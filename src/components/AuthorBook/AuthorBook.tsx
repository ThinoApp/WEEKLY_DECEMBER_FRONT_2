import config from '@/utils/config';
import { list } from './AuthorBook.utils';
import { motion } from 'framer-motion';
import './AuthorBook.scss';
import { fadeInDown, rotateAndScale, zoomIn } from '@/utils/animation';
const AuthorBook = () => {
    return (
        <div className="AuthorBook">
            <motion.h2
                variants={fadeInDown}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.7, type: 'spring' }}
            >
                Author’s Book Includes
            </motion.h2>
            <div className="AuthorBook-content">
                <div className="AuthorBook-content-item">
                    <motion.img
                        variants={rotateAndScale('right')}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            duration: 0.5,
                        }}
                        src={`${config.image_base_url}/assets/images/Book_2.png`}
                        alt="Author book image"
                    />
                    <div>
                        <motion.h3
                            variants={fadeInDown}
                            initial="hidden"
                            whileInView="show"
                            transition={{ delay: 0.3 }}
                        >
                            Atomic One’s
                        </motion.h3>
                        <motion.p variants={fadeInDown} initial="hidden" whileInView="show" transition={{ delay: 0.5 }}>
                            Many variations of passages of Lorem Ipsum willing araise alteration in some form.
                        </motion.p>
                        <motion.ul
                            variants={fadeInDown}
                            initial="hidden"
                            whileInView="show"
                            transition={{ delay: 0.6 }}
                            className="AuthorBook-content-list"
                        >
                            {list.map((item) => (
                                <li key={item.id}>
                                    <div className="list-badge" />
                                    <div className="list-content">
                                        <h4>{item.title}:</h4>
                                        <p>
                                            {item.value} {item.units}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </motion.ul>
                        <motion.button
                            variants={fadeInDown}
                            initial="hidden"
                            whileInView="show"
                            transition={{ delay: 0.7 }}
                        >
                            Order Today
                        </motion.button>
                    </div>
                </div>
                <hr className="w-full my-4 bg-primary block sm:hidden" />
                <div className="AuthorBook-content-item">
                    <motion.img
                        variants={rotateAndScale('left')}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            duration: 0.5,
                        }}
                        src={`${config.image_base_url}/assets/images/Book_1.jpg`}
                        alt="Author book image"
                    />
                    <div>
                        <motion.h3
                            variants={fadeInDown}
                            initial="hidden"
                            whileInView="show"
                            transition={{ delay: 0.3 }}
                        >
                            The Dark Light
                        </motion.h3>
                        <motion.p variants={fadeInDown} initial="hidden" whileInView="show" transition={{ delay: 0.5 }}>
                            Many variations of passages of Lorem Ipsum willing araise alteration in some form.
                        </motion.p>
                        <motion.ul
                            variants={fadeInDown}
                            initial="hidden"
                            whileInView="show"
                            transition={{ delay: 0.6 }}
                            className="AuthorBook-content-list"
                        >
                            {list.map((item) => (
                                <li key={item.id}>
                                    <div className="list-badge" />
                                    <div className="list-content">
                                        <h4>{item.title}:</h4>
                                        <p>
                                            {item.value} {item.units}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </motion.ul>
                        <motion.button
                            variants={fadeInDown}
                            initial="hidden"
                            whileInView="show"
                            transition={{ delay: 0.7 }}
                        >
                            Order Today
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AuthorBook;
