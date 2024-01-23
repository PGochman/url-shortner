import { Input } from "@/components/Input";
import Image from "next/image";
import linkIcon from "@/icons/linkIcon.svg";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default function Home() {
  const supabase = createServerComponentClient({cookies})
  return (
    <main className="flex flex-col w-3/5 mx-auto mt-20 text-secondary">
      <h1 className="mb-40 text-5xl flex justify-center">
        <Image src={linkIcon.src} alt="link icon" width={52} height={52} />
        URL Shortner
      </h1>
      <Input />
    </main>
  );
}
