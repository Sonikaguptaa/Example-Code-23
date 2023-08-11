import React from 'react'

export default function Show({ fruit, index }) {
    let { name, color, readyToEat } = fruit
    return (
        <div>
            <h1>Show</h1>
            <p>Name: {name}</p>
            <p>Color: {color}</p>
            <p>{readyToEat ? 'This fruit is ready to eat' : 'This fruit is NOT ready to eat'}</p><br />

            <form action={`/fruits/${index}?_method=DELETE`} method='POST'>
                <button>Remove</button>
            </form>
        </div>
    )
}
