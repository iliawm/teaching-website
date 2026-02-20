
import "@/app/globals.css"

import DashMessages from "@/Ui/DashMessages";
import {Suspense} from "react";






export default async function UserLayout({
                                             children
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <>




            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
        <DashMessages/>
        </>
    );
}

