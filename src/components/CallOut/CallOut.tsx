import config from '@/utils/config';
import './CallOut.scss';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/animation';
import { TypingH2 } from '../AnimatedComponents/AnimatedComponents';
const CallOut = () => {
    return (
        <div className="CallOut">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className="CallOut-left">
                <TypingH2 title="Get Book Copy Today!" />
                <p>
                    This the first true value generator on the Internet. It uses alphas dictionary of over 200 Latin
                    words.
                </p>
                <button>Order Today</button>
            </motion.div>
            <img src={`${config.image_base_url}/assets/images/callout-image.png`} alt="Call out image" />
        </div>
    );
};
export default CallOut;
