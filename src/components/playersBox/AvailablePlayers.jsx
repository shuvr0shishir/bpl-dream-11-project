import React from 'react';
import PlayerCard from './PlayerCard';

const AvailablePlayers = ({ playersData, coin, setCoin, selectedPlayer, setSelectedPlayer }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between items-center'>
            {
                playersData.map((player, index) => <PlayerCard key={index} player={player} coin={coin} setCoin={setCoin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />)
            }
        </div>
    );
};

export default AvailablePlayers;