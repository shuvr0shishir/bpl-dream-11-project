import React from 'react';
import SelectedCard from './SelectedCard';

const SelectedPlayers = ({ selectedPlayer, setSelectedPlayer, setTab, coin, setCoin }) => {

    return (
        <div>
            <div className='space-y-6 mb-8'>
                {
                    selectedPlayer.length === 0 ?
                        <div className='py-30 text-center bg-gray-50 rounded-2xl text-gray-600'>
                            <h2 className='text-2xl font-bold'>No player is selected yet.</h2>
                            <p >Please select player from Available Tab.</p>
                        </div>
                        :
                        selectedPlayer.map((player, index) =>
                            <SelectedCard
                                key={index}
                                player={player}
                                selectedPlayer={selectedPlayer}
                                setSelectedPlayer={setSelectedPlayer}
                                coin={coin}
                                setCoin={setCoin}
                            />
                        )
                }
            </div>
            <div>
                <button
                    onClick={() => setTab('available')}
                    className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-black rounded-xl bg-lime-400 shadow-xs hover:bg-lime-300 transition duration-300 cursor-pointer">
                    <span className="relative z-10">
                        Add More
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SelectedPlayers;