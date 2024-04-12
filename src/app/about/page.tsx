'use client';

import React from 'react';
import Image from 'next/image';
import about_1 from '../../../public/about_1.jpeg';
import about_2 from '../../../public/about_2.jpg';
import Carousel from '../../../components/Carousel';
import bci_competition from '../../../public/bci_competition.jpg';
import guest_speaker from '../../../public/guest_speaker.png';
import industry_academic_panels from '../../../public/industry_academic_panels.jpg';
import research_poster from '../../../public/research_poster.png';

export default function About() {
  return (
    <main>
      <div className="md:p-10 md:py-44 py-32">

        <div className="md:flex flex-row p-10 md:justify-between items-center">
          <div className='w-2/7'>
            <Image
              src={about_1}
              width={400}
              height={400}
              alt="Logo"
              className="h-auto w-auto  shadow-2xl rounded-lg"
            />
          </div>

          <div className='w-3/4 pl-10 py-10 md:py-0'>
            <h1 className="text-4xl pb-4">Our Mission</h1>
            <p className="text-lg text-justify">
              The Second Annual California Neurotechnology Conference is coming to NorCal!
              The inaugural conference accomplished something unprecedented: a wide-reaching West Coast symposium dedicated to neurotechnology and catered toward college students.
              The 2024 conference will once again break beyond what has been done before, reaching wider and connecting more audiences. The conference will be live streamed for the first time, expanding its reach beyond the West Coast to engage participants worldwide. It will also branch out from its initial student-centered theme, bringing together professionals from industry and academia.
            </p>

          </div>

        </div>
        <h1 className="flex text-4xl justify-center items-center"> Event Components</h1>

        <div className="md:flex flex-row py-10 md:pr-20 md:justify-between items-center">

          <div className='w-3/4 pl-20 md:pr-10 py-10 md:py-0'>
            <h1 className="text-2xl py-4">Guest Speakers</h1>
            <p className="text-lg text-justify">
              Presentations from our industry and academic guest speakers, who will talk about their lab’s projects and the current state of their area of research.
            </p>

          </div>

          <div className='w-2/7 pl-20 md:pl-0'>
            <Image
              src={guest_speaker}
              width={200}
              height={400}
              alt="Logo"
              className="h-auto w-auto shadow-2xl rounded-lg"
            />
          </div>
        </div>

        <div className="md:flex flex-row p-10 md:justify-between items-center">

          <div className='pl-10 w-2/7'>
            <Image
              src={industry_academic_panels}
              width={400}
              height={400}
              alt="Logo"
              className="h-auto w-auto  shadow-2xl rounded-lg"
            />
          </div>

          <div className='w-3/4 pl-10 md:pl-10 py-10 md:py-0'>
            <h1 className="text-2xl pu-4">Industry and Academic Panels</h1>
            <p className="text-lg text-justify">
              A panel Q&A will give participants an opportunity to ask questions to a panel of experts engaging in cutting-edge research and developing neurotechnology products.
            </p>

          </div>
        </div>
        

        <div className="md:flex flex-row pd-10 md:pr-20 md:justify-between items-center">

          <div className='w-3/4 pl-20 md:pr-10 py-10 md:py-0'>
            <h1 className="text-2xl py-4">Research Poster Sessions</h1>
            <p className="text-lg text-justify">
              The poster sessions will provide exposure for projects from labs, student groups, and applied researchers. It will also facilitate a sense of community, allowing students and professionals to exchange ideas and expand their knowledge of neurotechnology
            </p>

          </div>

          <div className='w-2/7 pl-20 md:pl-0'>
            <Image
              src={research_poster}
              width={200}
              height={400}
              alt="Logo"
              className="h-auto w-auto shadow-2xl rounded-lg"
            />
          </div>
        </div>
        

        
        <div className="md:flex flex-row p-10 md:justify-between items-center">

          <div className='pl-10 w-2/7'>
            <Image
              src={industry_academic_panels}
              width={400}
              height={400}
              alt="Logo"
              className="h-auto w-auto  shadow-2xl rounded-lg"
            />
          </div>

          <div className='w-3/4 pl-10 md:pl-10 py-10 md:py-0'>
            <h1 className="text-2xl py-4">BCI Competition</h1>
            <p className="text-lg text-justify">
              Competition between student clubs. Each school will bring one project, and student representatives will give a brief presentation and live demonstration. A panel of judges from industry and academia will determine the winner.
            </p>

          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center align-baseline">
        <span className="flex font-outfit text-3xl">
          Speakers and Panelists
        </span>
      </div>
      <div className="p-8">
        <Carousel />
      </div>

      <script async src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
    </main>
  );
}
