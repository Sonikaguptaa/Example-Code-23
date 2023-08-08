import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show</h1>
            <p>Name: {props.fruit.name}</p>
            <p>Color: {props.fruit.color}</p>
            <p>{props.fruit.readyToEat ? 'This fruit is ready to eat' : 'This fruit is NOT ready to eat'}</p>
        </div>
    )
}

export default Show