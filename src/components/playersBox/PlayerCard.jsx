import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { toast } from 'react-toastify';

const PlayerCard = ({ player, coin, setCoin, selectedPlayer, setSelectedPlayer }) => {
    const { name, country, type, batting_style, bowling_style, rating, price, img } = player;
    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () => {
        if (coin - price >= 0) {
            setSelectedPlayer([...selectedPlayer, player])
            setCoin(coin - price);
            setIsSelected(true);
            toast(`${player.name} is Selected!`);

        } else {
            toast.error("Not Enough Coins!");

        }
    }
    return (
        <>
            <div className="card bg-base-100 p-6 shadow-sm rounded-2xl">
                <figure className='h-60 rounded-2xl '>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                </figure>

                <div className="card-body mt-6 space-y-4 p-0">
                    <h2 className="card-title"><FaUser /> {name}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='flex items-center gap-1 text-gray-600'>
                            <FaFlag />
                            {country}
                        </p>
                        <span class="badge bg-gray-200">{type}</span>
                    </div>
                    <div className='border-t border-gray-200' />

                    <p className='font-bold'>Rating: {rating}</p>
                    <div className="flex justify-between font-semibold">
                        <p>{batting_style}</p>
                        <p className='text-right'>{bowling_style}</p>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>Price: ${price}</p>
                        <button
                            onClick={handleChoosePlayer}
                            className="btn font-normal"
                            disabled={isSelected}>
                            {isSelected ? 'Selected' : 'Choose Player'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayerCard;