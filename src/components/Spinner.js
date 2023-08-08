import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div>
            <div className="spinner flex flex-col items-center space-y-2 "></div>
            <p className="text-[rgb(34,34,57)] text-lg font-semibold">Loading...</p>
        </div>
    )
}

export default Spinner;