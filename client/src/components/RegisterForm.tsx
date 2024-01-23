"use client"

import { useState, useEffect, FormEvent } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function RegisterForm () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const supabase = createClientComponentClient()

    const handleGithubSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: "http://localhost:3000/auth/callback"
            }
        })
    }

    const handleEmailSignUp = async (event: FormEvent) => {
        event.preventDefault()
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            emailRedirectTo: "localhost:3000"
          }
        })
    }
    return (
        <div>
            <button onClick={handleGithubSignIn}>Sign up with github</button>
            <form onSubmit={handleEmailSignUp}> 
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>

                <label htmlFor="password">Email</label>
                <input type="password" name="password"/>

                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )
}