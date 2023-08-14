import React from 'react'

export default function Show({ fruit, index }) {
    let { name, color, readyToEat, _id } = fruit
    return (
        <div>
            <h1>Show</h1>
            <p>Name: {name}</p>
            <p>Color: {color}</p>
            <p>{readyToEat ? 'This fruit is ready to eat' : 'This fruit is NOT ready to eat'}</p><br />
            
            <form action={`/fruits/${_id}?_method=DELETE`} method='POST'>
                <button>Remove</button>
            </form><br />

            <form action={`/fruits/${index}/edit`}>
                <button>Edit</button>
            </form><br />

            <a href='/fruits'>Back</a>
        </div>
    )
}
