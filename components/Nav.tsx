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
        <nav className="bg-white fixed w-full z-20 top-0 start-0 backdrop-blur-lg bg-opacity-30 transition-all">
            <div className="max-w-screen-xl flex flex-wrap items-center opacity-100 justify-between">
                <Link href="/">
                    <Image className=""
                        src={cntc}
                        width={90}
                        height={90}
                        alt="Logo">
                    </Image>
                </Link>
                <div className="items-end justify-end hidden w-full md:flex md:w-auto md:order-1">
                    <span className="text-2xl font-semibold">California</span>
                    &nbsp;
                    <span className="text-2xl font-semibold">Neurotechnology</span>
                    &nbsp;
                    <span className="text-2xl font-semibold">Conference</span>
                    {/* <span className="text-sm font-semibold">Neurotechnology</span>
                    <span className="text-sm font-semibold">Conferece</span> */}
                </div>
                <div className="hidden md:flex md:order-1 md:px-10"></div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link href='https://ucdavisaggies.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS:UCD:SE2324:NEUROTECH24:&linkID=twucd&dataAccId=779&locale=en_US&siteId=ev_twucd' className={path == '/register' ? buttonStyle: buttonStyle}>
                        Register
                    </Link>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="hidden w-full md:flex md:w-auto md:order-3 " id="navbar-sticky">
                    <ul className="flex flex-col  bg-opacity-0 p-4 mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
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
                    <Link href='https://docs.google.com/forms/u/2/d/1xcOGr0-h82FcyzXI7rfmHWavpwwntGKmFg6m4rZc6YY/edit' className={path == '/Posters' ? activeStyle: style}>
                        Posters
                    </Link>
                    </ul>
                </div>
            </div>
            <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
        </nav>
    )
}