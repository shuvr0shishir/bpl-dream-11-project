import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers';
import PlayerCard from './PlayerCard';

const PlayersBox = ({ playersPromise }) => {
    const playersData = use(playersPromise)
    console.log(playersData);

    return (
        <div className='container mx-auto mb-8'>
            <AvailablePlayers />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between items-center'>
                {
                    playersData.map((player, index) => <PlayerCard key={index} player={player} />)
                }
            </div>
        </div>
    );
};

export default PlayersBox;