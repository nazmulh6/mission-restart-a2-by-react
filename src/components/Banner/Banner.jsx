import React from 'react';
import bannerImg from '../../assets/vector1.png'
// import bannerImg2 from '../../assets/vector2.png'

const Banner = ({progressCount}) => {
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2  items-center mt-10 gap-7'>
            <div className="flex-1 border border-gray-200 rounded-xl  px-14 py-8 text-center text-white font-semibold  bg-left bg-no-repeat" style={{
    backgroundImage: `url(${bannerImg}), linear-gradient(to right, #632EE3, #9F62F2)`}} >
                <h1 className='text-xl'>In-Progress</h1>
                <h2 className='text-3xl'>{progressCount}</h2>
            </div>
            <div className=' flex-1 border  border-gray-200 rounded-xl px-14 py-8  text-center text-white font-semibold  bg-left bg-no-repeat'style={{ backgroundImage: `url(${bannerImg}),linear-gradient(to right, #54CF68, #00827A)` }}>
                <h1 className='text-xl'>Resolved</h1>
                <h2 className='text-3xl'>0</h2>
                
            </div>
            
        </div>
    );
};

export default Banner;