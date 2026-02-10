import React from 'react';
import bannerBook from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='bg-[#EFEEEA] flex flex-col md:flex-row justify-center items-center mx-10 lg:mx-20 xl:mx-30 my-10 py-10 px-10 lg:px-20 rounded-lg'>
            <div className='playfair'>
                <p className='text-3xl md:text-5xl xl:text-6xl font-bold'>Books to freshen up your bookshelf</p>
                <p className="text-md text-gray-600 mt-1 max-w-xl roboto">
                    Explore a carefully curated collection of books designed to inspire readers, spark curiosity, and make your reading experience more meaningful.
                </p>
                <button className='bg-[#09637E] text-white roboto px-4 py-2 mt-3 mb-6 md:mt-3 rounded-lg text-xl'>View The List</button>
            </div>
            <div>
                <img src={bannerBook} alt="" />
            </div>
        </div>
    );
};

export default Banner;