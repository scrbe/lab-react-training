import React from 'react'
let idx = 1

function Carousel({ imgs }) {
    let [img, setImg] = React.useState(imgs[idx])
    const handleButton = (event) => {

        const { name } = event.target;
        if (name === 'left') {
            img = setImg(imgs[--idx])
        } else {
            img = setImg(imgs[++idx])
        }
        console.log(idx)
    }

    return <div>
        <button onClick={handleButton} name='left'>Left</button>
        <img src={img}></img>
        <button onClick={handleButton} name='right'>Right</button>
    </div>

}


export default Carousel