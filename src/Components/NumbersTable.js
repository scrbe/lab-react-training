import React from 'react'

function NumbersTable({ limit }) {
    const tableStyle = {
        display: 'flex',
        justifyContent: 'center'

    }

    let whiteSquareStyle = {
        backgroundColor: 'white',
        border: 'solid 1px black',
        width: '50px'
    }

    let redSquareStyle = {
        backgroundColor: 'red',
        border: 'solid 1px black',
        width: '50px'
    }

    const numArray = [{number: 1,
    style: redSquareStyle}]
    for (let i = 2; i <= limit; i++){
      if(i%2===0){
        numArray.push({number: i,
    style: whiteSquareStyle})
      } else{
        numArray.push({number: i,
        style: redSquareStyle})
      }
    }
    console.log(numArray)


    return <div style={tableStyle}>
        {
            numArray.map((element) => {
                return (
                        <div style={element.style}>
                        <p>{element.number}</p>
                    </div>
                )
            })
    }
    </div>
}

export default NumbersTable