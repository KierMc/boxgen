import React from 'react'

const Boxes = props => {

    const boxColor ={
        backgroundColor: props.color,
        display: 'inline-block',
        margin: '10px'
    }
    return (
        <div style={boxColor}></div>
    )
}

export default Boxes