import './TheChapter.scss';
import { list } from './TheChapter.utils';
const TheChapter = () => {
    return (
        <div className="TheChapter">
            <h2>The Chapter Includes</h2>
            <ul className="TheChapter-list">
                {list.map((item) => (
                    <li key={item.id}>
                        <h3>
                            Chapter-0{item.id} {item.chapter}
                        </h3>
                        <p>{item.subtitle}</p>
                        <div className="book-info">
                            {item.bookInfo.map((item) => (
                                <div key={item.id} className="book-info-item">
                                    <h4>{item.title}:</h4>
                                    <p>
                                        {item.value}
                                        {item.units}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
            <div className="TheChapter-list-bottom">
                <button className="free-trail-btn">Start a 15-Days Free Trail</button>

                <p>
                    Short description about each chapter <br /> <span>Have any questions?</span>
                    &nbsp;Contact us
                </p>
            </div>
        </div>
    );
};
export default TheChapter;
