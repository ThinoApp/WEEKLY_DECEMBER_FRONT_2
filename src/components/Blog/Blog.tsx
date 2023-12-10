import './Blog.scss';
import { list } from './Blog.utils';
const Blog = () => {
    return (
        <div className="Blog">
            <h2>Articles & Resources</h2>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <img src={item.url} alt="blog image" />
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="blog-cta-container">
                                <button>Read more</button>
                                <p>Author - 23.05.2022</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Blog;
