import config from '@/utils/config';
import './WhatLearn.scss';
import { list } from './WhatLearn.utils';
const WhatLearn = () => {
    return (
        <div className="WhatLearn">
            <h2>What will you learn?</h2>
            <div className="WhatLearn-content">
                <div className="WhatLearn-content-left">
                    {list.map((item) => (
                        <div className="WhatLearn-content-left-item" key={item.id}>
                            <p className="WhatLearn-content-left-item-numero">0{item.id}</p>
                            <p>{item.subtitle}</p>
                        </div>
                    ))}
                </div>
                <img src={`${config.image_base_url}/assets/images/what_you_learn-image.jpg`} alt="" />
            </div>
        </div>
    );
};
export default WhatLearn;
