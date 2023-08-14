import React from 'react'

function Edit({ fruit }) {
    let { name, color, readyToEat, _id } = fruit
    return (
        <div>
            <h1>Edit</h1>
            <form action={`/fruits/${_id}?_method=PUT`} method='POST'>

                <label htmlFor='name'>Name:</label><br />
                <input type='text' id='name' name='name' value={name}></input><br /><br /><br />

                <label htmlFor='color'>Color:</label><br />
                <input type='text' id='color' name='color' value={color}></input><br /><br />

                <label htmlFor='ready'>Ready To Eat:</label>
                <input type='checkbox' id='ready' name='readyToEat' checked={readyToEat}></input><br /><br /><br />

                <button>Update</button>
            </form><br />
            <a href={`/fruits/${_id}`}>Back</a>
        </div>
    )
}

export default Edit;

