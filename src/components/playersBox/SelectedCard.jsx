import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaFlag } from "react-icons/fa6";
import { toast } from 'react-toastify';

const SelectedCard = ({ player, selectedPlayer, setSelectedPlayer, coin, setCoin }) => {

    const handleDeleteSelectedPlayer = (player) => {
        setSelectedPlayer(selectedPlayer.filter(singlePlayer => singlePlayer.name != player.name))
        setCoin(coin + player.price)
        toast.success(`${player.name} is Deleted!`)

    };

    return (
        <div className='flex justify-between items-center gap-5 rounded-2xl border border-gray-200 p-3 shadow'>
            <div className='flex justify-between items-center gap-6'>
                <figure className='rounded-2xl h-20 w-20 overflow-hidden' >
                    <img src={player.img} alt="" className="w-full h-full object-cover" />
                </figure>
                <div>
                    <h2 className='text-2xl font-semibold mb-3 flex items-center gap-3'>
                        {player.name}
                        <span className=' text-gray-500 text-sm font-normal'><FaFlag className='inline mr-1' />{player.country}</span>
                    </h2>
                    <p className='text-gray-500'>{player.type} | ${player.price}</p>
                </div>
            </div>

            <div>
                <div
                    onClick={() => handleDeleteSelectedPlayer(player)}
                    className="rounded-full p-2 bg-gray-100 cursor-pointer">
                    <RiDeleteBin6Line className='text-red-500 shadow-md' />
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;