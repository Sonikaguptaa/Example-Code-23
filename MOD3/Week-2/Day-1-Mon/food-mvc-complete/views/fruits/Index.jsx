import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function Index(props) {
    return (
        <DefaultLayout title='Index View'>
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
                </form><br /><br /><br /><br /><br />

                <form action={`/fruits/seed`} method='POST'>
                    <button>SEED</button>
                </form><br />

                <form action={`/fruits/clear?_method=DELETE`} method='POST'>
                    <button>CLEAR</button>
                </form>
            </div>
        </DefaultLayout>
    )
}

export default Index;