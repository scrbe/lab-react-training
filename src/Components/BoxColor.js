import React from 'react';

function BoxColor({ r, g, b }) {
    let boxColor = {
        border: 'solid 1px black',
        padding: '50px',
        backgroundColor: `rgb(${r},${g},${b})`,
        color: 'white',
        'font-weight': 'bold',
        'font-size': '30px'
    }

    return (
        <div>
        <p style={boxColor}>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor

