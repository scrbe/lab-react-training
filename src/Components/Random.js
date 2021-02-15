import React from 'react';

function Random({ min, max }) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return (
        <p>Random value between {min} and {max} = {randomNumber}</p>
    )
}

// class Random extends React.Component {
//     render() {
//         const { min, max } = this.props;
//         const randomNum = Math.floor(Math.random() *(max-min) + min)
//         return <div>
//             <p>
//                 Random value between {min} and {max} --> {randomNum}
//             </p>
//         </div>
//     }
// }

export default Random;

// constructor(props{
//     super(props) // super apiunta el this a la isntancia y no a la clase. Su
// })