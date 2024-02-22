'use client';
import React from "react";import {usePathname} from "next/navigation"
import Link from "next/link"
import Image from "next/image";

export default function NavBar() {
    const path = usePathname()
    const style = "text-xl antialiased font-poppins align-center justify-center flex hover:text-blue-800"
    const activeStyle = style + " text-blue-900"

    const buttonStyle="text-xl antialiased font-poppins text-white bg-blue-800 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-none text-sm px-4 py-2 text-center"
    const buttonActiveStyle= buttonStyle + ""
    //TODO
    // edit SVG to make it take up more of the canvas
    // Adjust to colors to match figma design

    return (
        <div className="flex flex-rows justify-between px-2 backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 z-10 bg-white border-b border-gray-200 rounded-b-3xl">

            <div className="flex flex-rows opacity-100">
                <Link href="/">
                    <Image className=""
                        src="LogoBLC.svg"
                        width={100}
                        height={100}
                        alt="Logo">
                    </Image>
                </Link>
                
                <div className="flex flex-col justify-center items-start h-fullr">
                    <span className="text-sm font-semibold">California</span>
                    <span className="text-sm font-semibold">Neurotechnology</span>
                    <span className="text-sm font-semibold">Conferece</span>
                </div>
            </div>
            
            <div className="flex flex-row justify-between items-center">
                <div className="px-4 w-full flex flex-row space-x-4">
                    
                    <Link href='/' className={path == '/' ? activeStyle: style}>
                        Home
                    </Link>
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

                </div>

                <div className="pl-10 items-center flex pr-4">
                        <Link href='/register' className={path == '/register' ? buttonStyle: buttonStyle}>
                            Register
                        </Link>
                </div>
            </div>
        </div>
    )
}