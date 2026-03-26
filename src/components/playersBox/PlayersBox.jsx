import React, { use, useState } from 'react';
import AvailablePlayer from '../playersBox/AvailablePlayers'
import SelectedPlayers from './SelectedPlayers';

const PlayersBox = ({ playersPromise, coin, setCoin }) => {
    const playersData = use(playersPromise)

    const [tab, setTab] = useState('available')

    const [selectedPlayer, setSelectedPlayer] = useState([])

    return (
        <div className='container mx-auto mb-8'>
            <div className='flex justify-between items-center mb-8'>
                <h2 className='text-2xl font-bold'>
                    {tab === 'available' ?
                        'Available Players' :
                        `Selected Players (${selectedPlayer.length}/${playersData.length})`}
                </h2>

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
                        Selected <span>({selectedPlayer.length})</span>
                    </button>
                </div>
            </div>

            {
                tab === 'available' ?
                    <AvailablePlayer
                        playersData={playersData}
                        coin={coin}
                        setCoin={setCoin}
                        selectedPlayer={selectedPlayer}
                        setSelectedPlayer={setSelectedPlayer}
                    /> :
                    <SelectedPlayers
                        selectedPlayer={selectedPlayer}
                        setSelectedPlayer={setSelectedPlayer}
                        setTab={setTab}
                        coin={coin}
                        setCoin={setCoin}
                    />
            }
        </div>
    );
};

export default PlayersBox;