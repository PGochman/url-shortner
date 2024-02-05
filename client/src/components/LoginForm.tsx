"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const supabase = createClientComponentClient();

  const handleGithubSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "localhost:3000/auth/callback",
      },
    });
  };

  const handleEmailSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "example@email.com",
      password: "example-password",
    });
  };

  return (
    <div>
      <button
        className="border border-black bg-blue-200"
        onClick={handleGithubSignIn}
      >
        Sign in with github
      </button>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="password">Email</label>
        <input type="password" name="password" />

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
