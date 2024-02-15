import { Input } from "@/components/Input";
import Image from "next/image";
import linkIcon from "@/icons/linkIcon.svg";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import DivContainer from "@/components/divContainer";
import { createClientServer } from "../utils/supabase/server";
import { createClient } from "@/utils/supabase/client";
export default async function Home() {

  // const cookieStore = cookies()
  // const supabase = createClientServer(cookieStore)

  return (
    <main className="w-4/5 flex flex-col mt-32">
      <h1 className="mb-10 text-5xl flex justify-center">
        <Image src={linkIcon.src} alt="link icon" width={52} height={52} />
        URL Shortner
      </h1>
      <Input />
    </main>
  );
}
