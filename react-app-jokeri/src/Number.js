import React from 'react';
import './Number.css';
import AnimatedNumber from 'animated-number-react'; 

export default function Number({number}) {

    function formatValue(value) {
        return value.toFixed(0);
    }
    return (
        //<div> className="Number">{number}</div>
        <AnimatedNumber className="Number" value={number} formatValue={formatValue}/>
    )
}

