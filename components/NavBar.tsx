'use client';
import React from "react";
import {usePathname} from "next/navigation"
import {Logo} from "../components/AcmeLogo"
import Link from "next/link"

export default function NavBar() {
    const router =  usePathname();
    return (
        <ul className="flex">
            <li className="">
                <Logo className="w-fit h-fit border-2 border-pink-800"/>
            </li>
            <ul className="flex-1 border h-full allign-center justify-centet text-center">
                <p>hello world</p>
                {/* <li className="">
                    <Link href="/about" className={router === "/about" ? "" : ""}>
                        <p className="text-cyan-600">About Us</p>
                    </Link>  
                </li>
                <li className="">
                    <Link href="/event" className={router === "/event" ? "" : ""}>
                            Event
                    </Link>
                </li>
                <li className="">
                    <Link href="/sponsors" className={router === "/sponsors" ? "" : ""}>
                        Sponsors
                    </Link>
                </li>
                <li className="">
                    <Link href="/stream" className={router === "/stream" ? "" : ""}>
                        Stream
                    </Link>
                </li>
                <li className="">
                    <Link href="/register" className={router === "/register" ? "" : ""}>
                        Register
                    </Link>
                </li> */}
            </ul>
        </ul>
    )
}