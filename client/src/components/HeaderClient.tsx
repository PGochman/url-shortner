"use client"

import { Session} from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";


export default function HeaderClient ({session} : {session: Session | null}) {
    const supabase = createClient()
    const router = useRouter()

    const handleSignOut = async ()=>{
        await supabase.auth.signOut()
        router.refresh()
    }

    return (
        session === null ? 
        <>
        <span>
          <a href="/auth/login">Log in</a>
        </span>
        <span>
          <a href="/auth/register">sign in</a>
        </span>
      </> 
      :
      <button onClick={handleSignOut}>sign out</button> 

        )
}