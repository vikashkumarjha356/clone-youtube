import React from 'react';


const Button = ({ name, onClick }) => {



    return (
        <button
            className="px-3 py-2 m-3 bg-gray-200 rounded-lg font-bold text-sm transition-all 
            duration-300 ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
};

export default Button;
