import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default function Page () {
    const supabase = createServerComponentClient({cookies})
    return (
        <div>
            <Link href="/auth/login"><span>Sign In</span></Link>
            <Link href="/auth/register"><span>Sign Up</span></Link>
        </div>
    )
}