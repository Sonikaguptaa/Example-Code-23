import React from 'react'

function DefaultLayout(props) {
    return (
        <html>
            <head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <nav style={{ display: 'flex', flexDirection: 'row' }}>
                    <a href='/fruits'>Fruit</a>
                    <a href='/meats'>Meats</a>
                    <a href='/vegetables'>Vegetables</a>
                </nav>
                {props.children}
            </body>
        </html>
    )
}

export default DefaultLayout;

/*

<DefaultLayout>
    <Show />
</DefaultLayout>

*/
