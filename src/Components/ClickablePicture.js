import React from 'react';

function ClickablePicture({ img, imgClicked }) { 
    const [state, setState] = React.useState(false)
    const [firstImg, handleImg] = React.useState(img)
    const handleState = () => {
        setState(!state)
        if (!state) {
            handleImg(imgClicked)
        } else {
            handleImg(img)
        }
    }

    return <div>
        <img onClick={handleState} src={firstImg}></img>
    </div>
}

export default ClickablePicture