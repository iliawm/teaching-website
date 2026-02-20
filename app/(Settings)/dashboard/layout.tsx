
import "@/app/globals.css"

import DashMessages from "@/Ui/DashMessages";






export default async function UserLayout({
                                             children
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <>

            


            {children}
        <DashMessages/>
        </>
    );
}

