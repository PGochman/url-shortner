"use client";

import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/app/supabase";
import GitHubButton from "./GithubButton";
import { CldUploadWidget, CldUploadWidgetResults } from "next-cloudinary";
import { ImageResult } from "@/utils/types";
import axios from "axios";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleEmailSignUp = async (event: FormEvent) => {
    event.preventDefault();
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (data.user?.id) {
        await axios.post("http://localhost:3001/user", {id:data.user.id, userName, imageUrl})
      }

  };

  const getImageResult = (result: CldUploadWidgetResults) => {
    result.info && setImageUrl(result.info.secure_url)
  }

  return (
    <div className="flex flex-col justify-center items-center border-black border">
      <GitHubButton text="SignUp with GitHub" />
      <h1 className="m-20 text-5xl flex justify-center">
        Sign up with email:{" "}
      </h1>
      <form
        onSubmit={handleEmailSignUp}
        className="flex flex-col justify-center items-center"
      >
        <div className="m-4">
          <label className="text-2xl mx-6" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="text-2xl mx-6" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="text-2xl mx-6" htmlFor="password">
            user name
          </label>
          <input
            type="text"
            value={userName}
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-2xl mx-6" htmlFor="password">
            image
          </label>
          <CldUploadWidget
            uploadPreset="cloudinary-upload-images-shorturl"
            onUpload={getImageResult}
          >
            {({ open }) => {
              return (
                <button
                  onClick={() => open()}
                >
                  Upload an Image
                </button>
              );
            }}
          </CldUploadWidget>
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
