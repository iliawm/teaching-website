
import "@/app/globals.css"
import {Dashboard} from "@/Components/dashboard";


export default async function UserLayout({
                                             children,
                                             params
                                         }: {
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (

            <>
               <Dashboard id={id}/>
                {children }

            </>

    );
}
