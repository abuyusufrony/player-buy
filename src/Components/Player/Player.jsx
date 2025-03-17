import React from 'react';

const Player = ({ plr, buyplayer, addplayer }) => {
    const { name, cover, country, role, playing_hand, price } = plr
    return (


        <div>
            <div className=' flex  justify-center  '>
                <div className=" bg-base-100 w-96 shadow-lg my-7  bg-slate-200  ">

                    <img className='w-36  '
                        src={cover}
                        alt="" />

                    <div className="border-b-1 py-4 pr-3 rounded-lg    ">
                        <h2 className="">{name}</h2>
                        <div className='flex justify-between '>
                            <div> From:{country}</div>
                            <div className=''>{role}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>{playing_hand}</div>
                            <div className='  '>{playing_hand}</div>
                        </div>
                        <div className="flex justify-between">
                            <h3> price:{price}</h3>
                            <button onClick={() => { buyplayer(price, name) }} className=" cursor-pointer">Choice </button>
                        </div>
                        <button onClick={() => { addplayer() }} className='bg-red-500'> add Player</button>
                    </div>
                </div>
            </div>





        </div >
    );
};

export default Player;