
import "@/app/globals.css"
import {Dashboard} from "@/Components/dashboard";






export default async function UserLayout({
                                             children
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <>

            <Dashboard />


            {children}
        </>
    );
}

