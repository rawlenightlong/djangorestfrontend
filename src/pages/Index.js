import { useLoaderData } from "react-router-dom"
import Post from "../components/Post"

export default function Index(props){

    const todos = useLoaderData()

    return todos.map(post => <Post key={post.id} post={post}/>)
}