'use client';
import React from "react";import {usePathname} from "next/navigation"
import Link from "next/link"
import Image from "next/image";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <>
            <footer className="bg-blue-900">
                <div className="flex flex-row justify-between x-auto w-full p-4 py-6 lg:py-8">

                    <div className="flex flex-col items-start h-fullr">
                        <span className="text-xs text-white">Made by Neurotech@Davis</span>
                        <span className="text-xs text-white">Designed by Ciel Wood, Dhruv Sangamwar, and Kyle</span>
                    </div>


                    <div className="flex flex-row justify-between">
                        
                        <button className="flex px-4 flex-col items-center text-xs text-white ">
                            <LinkedInIcon/>
                            linkedIn
                        </button>


                        <button className="flex px-4 flex-col items-center text-xs text-white">
                            <Link
                                href={`mailto:conference2024@caneurotech.com`}
                            >
                                <EmailIcon/>
                            </Link>
                            Email
                        </button>

                        <button className="flex px-4 flex-col items-center text-xs text-white">
                            <InstagramIcon/>
                            Instagram
                        </button>

                    </div>
                </div>
            </footer>
        </>
    )
}