import { useLoaderData } from "react-router-dom"

export default function Show(props){

    const post = useLoaderData()

    //styles
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }

    return (<>
    
    <div style={div}>
        <h1>Task: {post.subject}</h1>
        <h3>Instructions: {post.details}</h3>
    </div>
    
    </>)
}