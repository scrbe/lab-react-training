import { findByLabelText } from '@testing-library/react';
import React from 'react';

function CreditCard({ number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const creditCardStyle = {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'flex-start',
        'background-color': { bgColor },
        color: { color },
    }

    return (
        <div style={creditCardStyle}>
            <p>Expires {expirationMonth}</p>
            <p>{bank}</p>
            <p>{owner}</p>
            {
                creditCardNum(number)
            }
            </div>
    )
}

function creditCardNum(num){
    const split = num.split('');
    const numsToDisplay = split.slice(Math.max(split.length - 4, 1));
    return numsToDisplay;
}

export default CreditCard

