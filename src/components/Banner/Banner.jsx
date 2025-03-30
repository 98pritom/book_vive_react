import React from 'react';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[500px] px-4 sm:px-6 lg:px-8 rounded-2xl mt-5 mb-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-lg shadow-2xl" />
                <div className='text-center lg:text-left lg:ml-10'>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Box Office News!</h1>
                    <p className="py-4 sm:py-6 text-sm sm:text-base">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary mt-2 sm:mt-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;