'use client';
import Image from 'next/image'
import ntb from '../../public/ntb.png'
import ntsc from '../../public/ntsc.png'
import crux from '../../public/crux.png'
import ntsd from '../../public/ntsd.png'
import ntd from '../../public/ntd.png'
import ntechx from '../../public/ntechx.png'
import ntechusc from '../../public/ntechusc.png'
import angry from '../../public/angry.png'
import home_1 from '../../public/home_1.png'

import biosensors from '../../public/biosensors.jpg'
import postersesh from '../../public/postersesh.jpg'
import robothand from '../../public/robothand.jpg'
import audience from '../../public/audience.jpg'
import panel from '../../public/panel.jpg'

import Link from "next/link"

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from 'react';
import Carousel from '../../components/Carousel';

export default function Home() {
  return (
    <main>
        <div className="py-64 p-10 md:p-40 md:py-60 md:flex flex-row justify-between">

        <div className="flex flex-col font-outfit text-4xl">
          <div>
            <div className="font-outfit text-4xl">
              Explore the&nbsp;
              <span className="font-bold font-outfit">new wave</span><br />
              of <span className="font-bold font-outfit">Neurotechnology.</span>
              
            </div>
          </div>
        </div>

        <div className="pt-20 md:pt-0 flex flex-col justify-between">
          <span className="font-poppins text-4xl">April 28, 2024</span>
          <div className="font-poppins text-3xl">Davis, California</div>
        </div>
      </div>

      <div className="md:flex md:flex-row items-start bg-blue-900 p-11">
        <div className="items-start">
          <Image
              src={home_1}
              width={1228}
              height={400}
              alt="Logo"
          />
        </div>
                
        <div className="flex flex-col p-10">
          <span className="font-outfit text-white font-thin">
          The second annual California Neurotechnology Conference will be a full-day event held at UC Davis and jointly hosted by UC Davis, UCLA, UC Berkeley, UC San Diego, UC Santa Cruz, and USC. The event will bring together undergraduate student neurotechnology clubs from across the west coast, along with graduate students, academic researchers, and industry professionals. There are 4 main components of the conference: guest speaker presentations, industry and academic panels, a student club BCI competition, and research poster sessions. All four components except the research poster sessions will also be live-streamed to reach a broader audience.
          </span>

          <div className="flex flex-row pt-4">
            <Link href='/about'>
            <div className="flex flex-shrink font-outfit text-blue-900 bg-red-100 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-none text-sm px-6 py-2 text-center align-middle items-center">
                              Learn More
                
                <ChevronRightIcon/>
            </div>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 py-4">
        <div className="flex flex-row justify-center align-baseline py-9">
          <span className="flex font-outfit text-3xl">
            Speakers and Panelists
          </span>
        </div>
        
        <div className="p-8 pb-12">
          <Carousel/>
        </div>

        <div className="flex justify-center">
          (Swipe to see more)
        </div>
      </div>

      <div className="flex flex-row items-center justify-center place-items-center pt-8">
        <span className="flex font-outfit text-2xl">
          Presented By
        </span>
      </div>
      
      <div className="py-10 px-4 md:flex md:flex-row justify-between">
      <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
            <Image
              src={ntb}
              width={100}
              height={100}
              alt="Logo"
              className="rounded-full overscroll-hidden"
            />
          </div>

          <span className="font-outfit font-thin text-xs">
            Neurotech@Berkley
          </span>
        </div>
      
        <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
              <Image
                src={crux}
                width={100}
                height={100}
                alt="Logo"
                className="rounded-full overscroll-hidden"
              />
            </div>
          <span className="font-outfit font-thin text-xs">
            CruX@LA
          </span>
        </div>

        <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
              <Image
                src={ntd}
                width={100}
                height={100}
                alt="Logo"
                className="rounded-full overscroll-hidden"
              />
            </div>
          <span className="font-outfit font-thin text-xs">
            Neurotech@Davis
          </span>
        </div>
      
        <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
              <Image
                src={ntsd}
                width={100}
                height={100}
                alt="Logo"
                className="rounded-full overscroll-hidden"
              />
            </div>
          <span className="font-outfit font-thin text-xs">
            Triton Neurotech@UCSD
          </span>
        </div>

        <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
              <Image
                src={ntsc}
                width={100}
                height={100}
                alt="Logo"
                className="rounded-full overscroll-hidden"
              />
            </div>
          <span className="font-outfit font-thin text-xs">
            NeuroTechSC@UCSC
          </span>
        </div>

        <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
              <Image
                src={ntechusc}
                width={100}
                height={100}
                alt="Logo"
                className="rounded-full overscroll-hidden"
              />
            </div>
          <span className="font-outfit font-thin text-xs">
            Neurotech USC
          </span>
        </div>
      </div>
      

      <div className="flex flex-col items-center justify-center place-items-center pb-11">
        <span className="flex font-outfit text-2xl p-11">
          In collaboration with
        </span>
        <Image
              src={ntechx}
              width={500}
              height={400}
              alt="Logo"
          />

      </div>

        
        <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
    </main>
  );
}
