import { createClientServer } from "@/utils/supabase/server";
import HeaderClient from "./HeaderClient";
import { cookies } from "next/headers";

export async function Header() {
    const cookieStore = cookies()
    const supabase = createClientServer(cookieStore);

    const { data: {session} } = await supabase.auth.getSession();

    return <HeaderClient session={session}/>
}
