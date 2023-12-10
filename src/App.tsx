import './App.scss';
import About from './components/About/About';
import AuthorBook from './components/AuthorBook/AuthorBook';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import CallOut from './components/CallOut/CallOut';
import Footer from './components/Footer/Footer';
import OtherCallOut from './components/OtherCallOut/OtherCallOut';
import Testimonial from './components/Testimonial/Testimonial';
import TheChapter from './components/TheChapter/TheChapter';
import TrustedBy from './components/TrustedBy/TrustedBy';
import WhatLearn from './components/WhatLearn/WhatLearn';

function App() {
    return (
        <div className="App">
            <Banner />
            <AuthorBook />
            <About />
            <TrustedBy />
            <CallOut />
            <WhatLearn />
            <TheChapter />
            <Testimonial />
            <Blog />
            <OtherCallOut />
            <Footer />
        </div>
    );
}

export default App;
