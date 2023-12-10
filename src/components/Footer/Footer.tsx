import config from '@/utils/config';
import './Footer.scss';
import { exploreList, keepInTouchList, networkIcons, utilityPagesList } from './Footer.utils';
import { FiMoreHorizontal } from 'react-icons/fi';
const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-top">
                <div className="Footer-social">
                    <div>
                        <img src={`${config.image_base_url}/assets/images/Logo.svg`} alt="logo" />
                        <h2>Pages</h2>
                    </div>
                    <ul>
                        {networkIcons.map((item, index) => (
                            <li className="icons-container" key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="Footer-explore">
                    <h3>Explore</h3>
                    <ul>
                        {exploreList.map((item, index) => (
                            <li key={index}>
                                <FiMoreHorizontal className="text-secondary text-2xl" />
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="Footer-explore">
                    <h3>Utility Pages</h3>
                    <ul>
                        {utilityPagesList.map((item, index) => (
                            <li key={index}>
                                <FiMoreHorizontal className="text-secondary text-2xl" />
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="Footer-explore">
                    <h3>Keep in Touch</h3>
                    <ul>
                        {keepInTouchList.map((item, index) => (
                            <li key={index}>
                                <p>{item.title} : </p>
                                <p>{item.value}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="Footer-copyright">
                © Drafted by <span>Victorflow</span>&nbsp;- Powered by&nbsp;
                <span>Webflow</span>
            </p>
        </div>
    );
};
export default Footer;
