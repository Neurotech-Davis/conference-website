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
                        <span className="text-xs text-white">Designed by Ciel Wood and Dhruv Sangamwar</span>
                    </div>


                    <div className="flex flex-row justify-between">
                        
                        <Link href="https://www.linkedin.com/company/california-neurotechnology-conference/">
                            <button className="flex px-4 flex-col items-center text-xs text-white ">
                                <LinkedInIcon/>
                                linkedIn
                            </button>
                        </Link>


                        <Link href={`mailto:conference2024@caneurotech.com`}>
                            <button className="flex px-4 flex-col items-center text-xs text-white">
                                <EmailIcon/>
                                Email
                            </button>
                        </Link>
                        <Link href="https://www.instagram.com/neurotechconference?igsh=ZDE1MWVjZGVmZQ==">
                            <button className="flex px-4 flex-col items-center text-xs text-white">
                                <InstagramIcon/>
                                Instagram
                            </button>
                        </Link>

                    </div>
                </div>
            </footer>
        </>
    )
}