function New() {
    return ( 
        <>
            <h1>New Post</h1>
            <form action="/posts" method="POST">
                <label htmlFor="nme">Subject:</label><br />
                <input type="text" id="nme" name="subject" /><br /><br />

                <label htmlFor="clr">Body:</label><br />
                <textarea name="body" id="clr" cols="30" rows="10" /><br /><br />

                <button>Submit</button>
            </form>
        </>
    );
}

export default New;