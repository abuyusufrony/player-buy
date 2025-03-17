import React from 'react';

const Seclet = ({ splayer }) => {
    const { name } = splayer
    return (
        <div className='p-4 m-4 bg-slate-300'>
            <h2> name {name}</h2>
        </div>
    );
};

// const Seclet = ({ splayer }) => {
//     return (
//         <div className="p-4 m-4 bg-slate-300">
//             <h2> Name: {splayer.name}</h2>
//         </div>
//     );
// };

export default Seclet;