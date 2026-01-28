import Link from "next/link";
import { VscAccount , VscBell } from "react-icons/vsc";

export const Navbar = () => {
    const logged_in = false
    const id = 1
    return (
        <div className="w-full flex justify-center mb-10 absolute" >
        <div className="bg-indigo-400 text-white flex justify-between items-center w-19/20 h-[90px] rounded-b-4xl px-7 ">
            <div className="top-r h-full flex items-center justify-start gap-6" >
                {logged_in?
                <Link href={""} className="acc w-15 text-4xl flex justify-center">
                    <VscAccount />
                </Link> :
                    <Link href={`/users/${id}`} className="acc w-15 text-4xl flex justify-center">
                        <VscAccount />
                    </Link>
                }
                <Link href={""}  className="acc w-15 text-4xl flex justify-center">
                    <VscBell />
                </Link>
                {/*<Link href={""} className="acc w-15 text-4xl flex justify-center">*/}

                {/*</Link>*/}
                {/*<Link href={""} className="acc w-15 text-4xl flex justify-center">*/}

                {/*</Link>*/}
            </div>
            <div className="top-l h-full" >

            </div>
        </div>
        </div>
            )
}

