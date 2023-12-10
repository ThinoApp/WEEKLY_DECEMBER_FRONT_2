import { list } from './Trusted.utils';
import './TrustedBy.scss';
import { motion } from 'framer-motion';
import { slideRight, staggerContainer } from '@/utils/animation';
const TrustedBy = () => {
    return (
        <div className="TrustedBy">
            <h2>Trusted by the Best</h2>
            <ul>
                {list.map((item, index) => (
                    <motion.li
                        variants={slideRight}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            delay: index * 0.2,
                        }}
                        key={item.id}
                    >
                        <img src={item.url} alt="society logo" />
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};
export default TrustedBy;
