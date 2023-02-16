import { redirect } from "react-router-dom";

import url from "./url";


export default async function createAction({request}){
    // get Form Data
    const formData = await request.formData()
    // construct body for API call
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // request to create route
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })

    // redirect user back to the index page
    return redirect('/')
}