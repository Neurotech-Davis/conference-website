'use client';
import React from "react";import {usePathname} from "next/navigation"
import Link from "next/link"
import Image from "next/image";
import cntc from "../public/cntc.png"


export default function NavBar() {
    const path = usePathname()
    const style = "text-xl antialiased font-poppins align-center justify-center flex hover:text-blue-800"
    const activeStyle = style + " text-blue-900"

    const buttonStyle="text-xl antialiased font-poppins text-white bg-blue-800 hover:bg-blue-300 font-medium rounded-none text-sm px-4 py-2 text-center"
    const buttonActiveStyle= buttonStyle + ""
    //TODO
    // edit SVG to make it take up more of the canvas
    // Adjust to colors to match figma design

    return (
        <div className="flex flex-rows justify-between px-2 backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 z-10 bg-white border-b border-gray-200 rounded-b-3xl">

            <div className="flex flex-rows opacity-100">
                <Link href="/">
                    <Image className=""
                        src={cntc}
                        width={90}
                        height={90}
                        alt="Logo">
                    </Image>
                </Link>
                
                <div className="flex flex-row justify-center items-start h-fullr p-8">
                    <span className="text-2xl font-semibold">California</span>
                    &nbsp;
                    <span className="text-2xl font-semibold">Neurotechnology</span>
                    &nbsp;
                    <span className="text-2xl font-semibold">Conference</span>
                    {/* <span className="text-sm font-semibold">Neurotechnology</span>
                    <span className="text-sm font-semibold">Conferece</span> */}
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
                    <Link href='https://docs.google.com/forms/u/2/d/1xcOGr0-h82FcyzXI7rfmHWavpwwntGKmFg6m4rZc6YY/edit' className={path == '/sponsors' ? activeStyle: style}>
                        Posters
                    </Link>
                    {/* <Link href='/stream' className={path == '/stream' ? activeStyle: style}>
                        Stream
                    </Link> */}

                </div>

                <div className="pl-10 items-center flex pr-4">
                        <Link href='https://ucdavisaggies.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS:UCD:SE2324:NEUROTECH24:&linkID=twucd&dataAccId=779&locale=en_US&siteId=ev_twucd' className={path == '/register' ? buttonStyle: buttonStyle}>
                            Register
                        </Link>
                </div>
            </div>
        </div>
    )
}