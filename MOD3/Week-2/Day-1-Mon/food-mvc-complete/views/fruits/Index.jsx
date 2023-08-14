import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Index</h1>
            {props.fruits.map((fruit) => 
                <a href={`/fruits/${fruit._id}`} key={fruit._id}>
                    <p>{fruit.name}</p>
                </a>
            )}
            <br />

            <form action={`/fruits/new`}>
                <button>Add Fruit</button>
            </form>
        </div>
    )
}

export default Index;