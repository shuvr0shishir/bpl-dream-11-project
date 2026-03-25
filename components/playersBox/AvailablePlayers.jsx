import React from 'react';

const AvailablePlayers = () => {
    return (
        <div className='flex justify-between items-center mb-8'>
            <h2 className='text-2xl font-bold'>Available Players</h2>

            <div className="inline-flex bg-gray-100 rounded-xl p-0.5">

                <button className="px-5 py-2 rounded-lg bg-lime-300 font-semibold text-black">
                    Available
                </button>

                <button className="px-5 py-2 rounded-lg text-gray-500">
                    Selected <span>(0)</span>
                </button>

            </div>
        </div>
    );
};

export default AvailablePlayers;