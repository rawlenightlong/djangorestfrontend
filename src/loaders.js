import url from "./url";

export async function IndexLoader(props){
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function ShowLoader({params}){
    const response = await fetch(url + params.id + "/")
    const data = await response.json()
    return data
}