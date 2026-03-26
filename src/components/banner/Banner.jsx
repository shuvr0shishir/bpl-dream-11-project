import React from 'react';
import bgShadow from '../../assets/bg-shadow.png'
import bgMain from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div
            className="container mx-auto rounded-3xl bg-black bg-cover bg-center flex items-center justify-center py-16 "
            style={{ backgroundImage: `url(${bgShadow})` }}
        >
            <div className="text-center text-white space-y-4 px-4">

                <img src={bgMain} alt="" className="mx-auto h-50" />

                <h1 className="text-xl md:text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>

                <p className="text-gray-300">Beyond Boundaries Beyond Limits</p>


                <button className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-black rounded-xl bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.6)] hover:bg-lime-300 transition duration-300 cursor-pointer">
                    <span className="relative z-10">
                        Claim Free Credit
                    </span>
                </button>
            </div>

        </div>
    );
};

export default Banner;