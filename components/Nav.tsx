'use client';
import React from "react";import {usePathname} from "next/navigation"
import Link from "next/link"
import Image from "next/image";

export default function NavBar() {
    const path = usePathname()
    const style = "allign-cetner justify-center flex hover:text-blue-600"
    const activeStyle = style + " text-blue-700"

    //TODO
    // edit SVG to make it take up more of the canvas
    // Adjust to colors to match figma design

    return (
        <div className="flex flex-rows justify-between mx-10">
            <Link href="/">
                <Image className=""
                    src="logoBLC.svg"
                    width={75}
                    height={75}
                    alt="Logo">
                </Image>
            </Link>
           
            <div className="basis-3/5 grid grid-cols-5 gap5 items-center w-full">
                <Link href='/about' className={path == '/about' ? activeStyle: style}>
                    About
                </Link>
                <Link href='/event' className={path == '/event' ? activeStyle: style}>
                    Event
                </Link>
                <Link href='/sponsors' className={path == '/sponsors' ? activeStyle: style}>
                    Sponsors
                </Link>
                <Link href='/stream' className={path == '/stream' ? activeStyle: style}>
                    Stream
                </Link>
                <Link href='/register' className={path == '/register' ? activeStyle: style}>
                    Register
                </Link>
            </div>
        </div>
    )
}