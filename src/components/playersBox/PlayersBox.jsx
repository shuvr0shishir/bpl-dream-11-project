import React, { use, useState } from 'react';
import AvailablePlayer from '../playersBox/AvailablePlayers'
import SelectedPlayers from './SelectedPlayers';

const PlayersBox = ({ playersPromise }) => {
    const playersData = use(playersPromise)
    const [tab, setTab] = useState('available')

    return (
        <div className='container mx-auto mb-8'>
            <div className='flex justify-between items-center mb-8'>
                <h2 className='text-2xl font-bold'>{tab === 'available' ? 'Available Players' : 'Selected Players (2/6)'}</h2>

                <div className="inline-flex bg-gray-100 text-gray-500 rounded-lg p-0.5">

                    <button
                        onClick={() => setTab("available")}
                        className={`px-5 py-2 rounded-lg 
                    ${tab === 'available' ? 'bg-lime-300 text-black font-semibold' : ''}
                    `}>
                        Available
                    </button>

                    <button
                        onClick={() => setTab("selected")}
                        className={`px-5 py-2 rounded-lg 
                    ${tab === 'selected' ? 'bg-lime-300 text-black font-semibold' : ''}
                    `}>
                        Selected <span>(0)</span>
                    </button>
                </div>
            </div>

            {
                tab === 'available' ?
                    <AvailablePlayer playersData={playersData} /> :
                    <SelectedPlayers />
            }
        </div>
    );
};

export default PlayersBox;