import React from 'react'

function New() {
    return (
        <div>
            <h1>New</h1>
            <form action='/fruits' method='POST'>

                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name'></input>

                <label htmlFor='color'>Color:</label>
                <input type='text' id='color' name='color'></input>

                <label htmlFor='ready'>Ready To Eat:</label>
                <input type='checkbox' id='ready' name='ready'></input>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default New;