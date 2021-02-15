import React from 'react'

function Dice() {
    const randomDice = randomNum()
    const [initDice, setDice] = React.useState(randomDice)
    const handleDice = () => {
        setTimeout(() => {
            setDice('/dice-empty.png')
        }, 1);
        setTimeout(() => {
            setDice(randomNum())
        }, 1000);
    }
    return <div>
        <img onClick={handleDice} src={initDice}></img>
    </div>
}

function randomNum() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imgString = `/dice${randomNumber}.png`
    return imgString
}

export default Dice