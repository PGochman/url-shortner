"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import GitHubButton from "./GithubButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleEmailSignIn = async () => {
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email: "example@email.com",
  //     password: "example-password",
  //   });
  // };

  return (
    <div>
      <GitHubButton text="Sign in with github"/>
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
