import axios from "axios"
import { useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


function Edit() {

    const [comment, setComment] = useState({})

    const textRef = useRef()

    const params = useParams()

    const navigate = useNavigate()

    async function getComment() {
        const response = await axios.get(`/api/comments/${params.postId}/${params.commentId}`)
        console.log(response)
        setComment(response.data)
    }

    useState(() => {
        getComment()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const comment = {
            text: textRef.current.value,
        }
        await axios.put(`/api/comments/${params.postId}/${params.commentId}`, comment)
        navigate(`/posts/${params.postId}`)
    }

    if (!comment.text)
        return <div>Loading...</div>

    return ( 
        <>
            <h1>Edit Comment</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="clr">Body:</label><br />
                    <textarea name="text" id="clr" cols="30" rows="10" defaultValue={comment.text} ref={textRef} /><br /><br />

                    <button>Submit</button>
                </form>
                    <button onClick={() => navigate(`/posts/${params.postId}`)}>Back</button>
            </div>
        </>
    );
}

export default Edit;