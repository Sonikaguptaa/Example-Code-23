import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Index</h1>
            {props.fruits.map((fruit, i) => 
                <a href={`/fruits/${fruit._id}`}><p key={i}>{fruit.name}</p></a>
            )}
        </div>
    )
}

export default Index;