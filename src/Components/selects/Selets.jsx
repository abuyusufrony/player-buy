import React from 'react';
import Seclet from '../Selet/Seclet';

const Selets = ({ player, credit }) => {
    console.log(credit)
    return (
        <div>
            <h2>
                {/* {
                    player.map(p => <Seclet splayer={p}></Seclet>)
                } */}

                <h2>
                    {player.map((p, index) => (
                        <Seclet key={index} splayer={p} />
                    ))}
                </h2>
            </h2>
        </div>
    );
};

export default Selets;