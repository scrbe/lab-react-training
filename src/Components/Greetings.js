import React from 'react';

function Greetings(props) {
    const greetings = {
        en: 'Hello',
        de: 'Hallo',
        fr: 'Bonjour',
        es: 'Hola'
    }
    return (
        <p>{greetings[props.lang]} {props.children}</p>
    )
}

export default Greetings