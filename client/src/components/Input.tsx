"use client";
import axios from "axios";
import { FormEvent, useState } from "react";
import DivContainer from "./divContainer";
const URL_BASE = "http://localhost:3001";

export function Input () {
  const [shortURL, setShortURL] = useState("");
  const [URL, setURL] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await axios.post(`${URL_BASE}/shortURL`, { url: URL });
    setShortURL(`http://localhost:3000/${response.data.shortURL}`);
  };
  return (
    <DivContainer>
      <form
        className="border border-solid border-background-3 shadow-md shadow-background-4 rounded"
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
          {shortURL && <span>Short URL: {shortURL}</span>}
        </div>
      </form>
    </DivContainer>
  );
};
