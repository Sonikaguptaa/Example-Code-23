import React from 'react'

function New() {
    return (
        <div>
            <h1>New</h1>
            <form action='/fruits' method='POST'>

                <label htmlFor='name'>Name:</label><br />
                <input type='text' id='name' name='name'></input><br /><br /><br />

                <label htmlFor='color'>Color:</label><br />
                <input type='text' id='color' name='color'></input><br /><br />

                <label htmlFor='ready'>Ready To Eat:</label>
                <input type='checkbox' id='ready' name='readyToEat'></input><br /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default New;