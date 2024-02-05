"use client";

import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/app/supabase";
import GitHubButton from "./GithubButton";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignUp = async (event: FormEvent) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  };
  return (
    <div className="flex flex-col justify-center items-center border-black border">
      <GitHubButton text="SignUp with GitHub"/>
      <h1 className="m-20 text-5xl flex justify-center">Sign up with email: </h1>
      <form
        onSubmit={handleEmailSignUp}
        className="flex flex-col justify-center items-center"
      >
        <div className="m-4">
          <label className="text-2xl mx-6" htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="text-2xl mx-6" htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
