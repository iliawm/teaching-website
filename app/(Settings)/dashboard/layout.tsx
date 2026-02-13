
import "@/app/globals.css"
import {Dashboard} from "@/Components/dashboard";
import {getSession} from "@/lib/(auth)/auth";
import Link from "next/link";


export default async function UserLayout({
                                             children
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Link href={"/"} className={"fixed top-0 right-0 mt-4 mr-4 text-white font-semibold text-2xl bg-indigo-600 w-full"}>Home button</Link>
            <Dashboard />
            {children}
        </>
    );
}

