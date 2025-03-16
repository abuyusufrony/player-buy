import React from 'react';
import head from '../../assets/banner-main.png'
import banner from '../../assets/bg-shadow.png'

const Headers = ({ addCredit, credit }) => {
    console.log(addCredit)
    return (
        <div className='mt-4 w-11/12 mx-auto'>
            <div><h2>every second</h2></div>


            <div
                className="hero "
                style={{

                    backgroundImage: `url(${banner})`

                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <img className='ml-72' src={head} alt="" />
                        <h2 className='text-4xl font-bold text-white mb-5'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                        <p className="mb-8 text-gray-300">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button onClick={() => { addCredit() }} className=" cursor-pointer bg-yellow-400  h-12 w-38 font-bold text-black rounded-2xl border-2
                         ">Claim Free Credit {credit} </button>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Headers;