import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = () => {

    const [firstplayer, setplayer] = useState([])
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setplayer(data))
    }, [])
    return (
        <div >
            <h2>Total player {firstplayer.length}</h2>

            <div>
                <div className="card-conatiner grid grid-cols-3 w-11/12 mx-auto rounded-lg bg-gray-100 pb-44 ">
                    {
                        firstplayer.map(fp => <Player plr={fp}></Player>)
                    }
                </div>


            </div>

            <div className="two-box relative  ">

                {/* <div className="two box one box h-32 bg-amber-600 flex justify-center text-center items-center w-96 absolute -mt-20  ml-12 "><h2>There are way without win</h2></div> */}

            </div>
        </div >
    );
};

export default Players;