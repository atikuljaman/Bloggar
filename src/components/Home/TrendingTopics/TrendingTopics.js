import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './TrendingTopics.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const TrendingTopics = () => {
    return (
        <div className='trending-topic-container'>
            <h2 className='trending-topic-title'>Trending Topics</h2>
            <Carousel responsive={responsive} autoPlaySpeed={1000}>
                <div className='trending-topic-content'>
                    <img className='trending-topic-img' src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/bg-image-2-300x300.jpg" alt='' />
                    <p className='trending-topic-name'>Travel</p>
                </div>
                <div className='trending-topic-content'>
                    <img className='trending-topic-img' src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-12-300x300.jpg" alt='' />
                    <p className='trending-topic-name'>Technology</p>
                </div>
                <div className='trending-topic-content'>
                    <img className='trending-topic-img' src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-21-300x300.jpg" alt='' />
                    <p className='trending-topic-name'>Mobile</p>
                </div>
                <div className='trending-topic-content'>
                    <img className='trending-topic-img' src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-29-300x300.jpg" alt='' />
                    <p className='trending-topic-name'>iPhone</p>
                </div>
                <div className='trending-topic-content'>
                    <img className='trending-topic-img' src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/post-column-01-11-300x300.jpg" alt='' />
                    <p className='trending-topic-name'>Innovation</p>
                </div>
                <div className='trending-topic-content'>
                    <img className='trending-topic-img' src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-19-300x300.jpg" alt='' />
                    <p className='trending-topic-name'>Digital</p>
                </div>
                <div className='trending-topic-content'>
                    <img className='trending-topic-img' src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-34-300x300.jpg" alt='' />
                    <p className='trending-topic-name'>Accessibility</p>
                </div>
            </Carousel>;
        </div>
    );
};

export default TrendingTopics;