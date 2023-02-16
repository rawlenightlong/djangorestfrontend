import url from "./url";

export async function IndexLoader(props){
    const response = await fetch(url)
    const data = await response.json()
    console.log("INDEX LOADER:", data)
    return data
}