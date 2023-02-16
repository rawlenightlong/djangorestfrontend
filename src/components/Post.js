import {Link} from 'react-router-dom'

export default function Post(props){

    const post = props.post
    // styling
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%"
    }

    return (<>
    <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>Task: {post.subject}</h1>
            <h3>Instructions: {post.details}</h3>
        </Link>
    </div>
    </>
    )
    
}