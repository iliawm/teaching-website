
import "@/app/globals.css"
import {Dashboard} from "@/Components/dashboard";
import {Suspense} from "react";






export default async function UserLayout({
                                             children
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <>

            <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
            </Suspense>

            {children}
        </>
    );
}

