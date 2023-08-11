import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Index</h1>
            {props.fruits.map((fruit, i) => <p key={i}>{fruit.name}</p>)}
        </div>
    )
}

export default Index;