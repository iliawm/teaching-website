import Link from "next/link";
import {IoHome} from "react-icons/io5";

export default function ContactUs() {
    return (
        <div>
            <Link href={"/"} className={"rounded-2xl bg-indigo-600 w-14 h-14 top-0 right-0 mt-4 mr-5 fixed text-2xl text-white font-semibold flex items-center justify-center"}><IoHome /></Link>
            <div>page isnt developed yet <br/>  please try again later</div>
        </div>
            )
}
