export default async function getQuiz(url) {
    let pathname = `https://opentdb.com/api.php${url}`

    const res = await fetch(pathname)
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data.results  
}