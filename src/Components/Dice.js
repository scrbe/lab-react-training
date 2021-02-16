import React from 'react'

function Dice() {
    const diceStyle = {
        width: '45px',
    }
    const randomDice = randomNum()
    const [initDice, setDice] = React.useState(randomDice)
    const handleDice = () => {
        setTimeout(() => {
            setDice('./../img/dice-empty.png')
        }, 1);
        setTimeout(() => {
            setDice(randomNum())
        }, 1000);
    }
    return <div>
        <img onClick={handleDice} src={initDice} style={diceStyle}></img>
    </div>
}

function randomNum() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imgString = `./../img/dice${randomNumber}.png`
    return imgString
}

export default Dice