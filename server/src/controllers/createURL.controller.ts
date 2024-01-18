import { UrlData } from "../models/urldata.model";

interface urlinfo {
    url: string
}

export default async function ({url} : urlinfo) {
    
    const urlShortened = Math.random().toString(36).substring(2, 7)

    try {
        const createdURL = await UrlData.create({
            originalURL: url,
            shortURL: urlShortened
        })

        return createdURL
    } catch (error) {
        console.log(error)
        return error
    }
}