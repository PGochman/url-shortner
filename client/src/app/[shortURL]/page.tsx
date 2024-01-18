import axios from "axios"
import { redirect } from "next/navigation"
const URL_BASE = "http://localhost:3001"

export default async function Page ({ params }: { params: { shortURL: string } }) {
    const {shortURL} = params
    const redirectURL = ((await axios(`${URL_BASE}/shortURL/${shortURL}`)).data)
    redirectURL?.originalURL && redirect(redirectURL.originalURL)
    return <div className="h-screen flex justify-center items-center text-center">
        {!redirectURL?.originalURL && (
            <div>
                <h1 className="text-secondary text-3xl sm:text-5xl">URL NOT FOUND</h1>
                <p className="text-secondary text-xl sm:text-3xl">Check the reference and try again :)</p>
            </div>
        )}
    </div>
}