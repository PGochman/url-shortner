"use client"
import { FormEvent, useState } from "react";

export const Input = () => {

const [shortURL, setShortURL] = useState("")
const [URL, setURL] = useState("")

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault()
    
    setShortURL("nvidsln")
  };
  return (
    <form
      className=" border border-solid border-secondary shadow-md shadow-black rounded"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center p-12 h-60 justify-around">
        <h1 className="text-4xl"> Input URL to be shortened</h1>
        <input
          type="text"
          name="url"
          className="w-3/5 border border-solid border-black rounded"
          placeholder="example: 'https://google.com'"
          autoComplete="off"
          onChange={(e) => setURL(e.target.value)}
        />
        {shortURL && 
        <span>Short URL: {shortURL}</span>
        }
      </div>
    </form>
  );
};
