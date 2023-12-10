import { range } from '@/utils/utils';
import './Testimonial.scss';
import { list } from './Testimonial.utils';

interface RatingProps {
    className?: string;
}

const Rating = ({ className }: RatingProps) => {
    return (
        <div className="flex flex-row items-center gap-1">
            {range(5).map((item) =>
                item !== 5 ? (
                    <div className={`w-5 h-5 rounded-full bg-secondary ${className}`} key={item} />
                ) : (
                    <div className={`w-5 h-5 rounded-full border-[1px] border-secondary ${className}`} key={item}>
                        <div className="w-1/2 h-full rounded-l-full bg-secondary" />
                    </div>
                ),
            )}
        </div>
    );
};
const Testimonial = () => {
    return (
        <div className="Testimonial">
            <div className="Testimonial-left">
                <h2>
                    What Readers <br className="hidden sm:inline" /> Say About the <br className="hidden sm:inline" />{' '}
                    Book
                </h2>
                <p>
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text. All the Lorem Ipsum generators.
                </p>
                <div>
                    <Rating />
                    <span>(4.8/5)</span>
                </div>
                <p>Overall Customer Ratings</p>
            </div>
            <div className="Testimonial-right">
                {list.map((item) => (
                    <div key={item.id} className="Testimonial-item">
                        <div className="Testimonial-item--top">
                            <img src={item.url} />
                            <div>
                                <h3>{item.nom}</h3>
                                <Rating className="sm:w-3 sm:h-3" />
                            </div>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Testimonial;
