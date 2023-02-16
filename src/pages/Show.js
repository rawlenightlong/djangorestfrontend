import { useLoaderData, Form } from "react-router-dom"

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
    <div style={{textAlign: "center"}}>
        <h2>Update A Todo</h2>
        <Form action={`/update/${post.id}`} method="post">
            <input type="text" name="subject" placeholder="subject" defaultValue={post.subject}/>
            <input type="text" name="details" placeholder="details" defaultValue={post.details}/>
            <button>Update Todo</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
            <button>Delete Todo</button>
        </Form>
    </div>
    </>)
}