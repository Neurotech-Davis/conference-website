import Image from 'next/image'

import Link from "next/link"
import React from 'react';

import David_Egleman from '../../../public/David_Eagleman.png';
import Nathan_Copeland from '../../../public/Nathan_Copeland.jpg';
import Sergey_Stavisky from '../../../public/Sergey_Stavisky.jpg';
import Sharena_Rice from '../../../public/Sharena_Rice.png';
import Chloe_Duckworth from '../../../public/Chloe_Duckworth.png';
import Caitlin_Ner from '../../../public/Caitlin_Ner.png';
import Virginia_de_Sa from '../../../public/Virginia_de_Sa.jpg';
import Lee_Miller from '../../../public/Lee_Miller.jpg';
import Karen_Moxon from '../../../public/Karen_Moxon.jpg';
import Jonathon_Schofield from '../../../public/Jonathon_Schofield.jpg';
import Jose_Munoz from '../../../public/Jose_Munoz.jpg';
import Gail_Gannon from '../../../public/Gail_Gannon.jpg';

export default function Panelists() {
    return (
      <main>
        <h1 className = "pt-32 p-10 font-bold text-4xl">Speakers</h1>
        <div className = "md:flex p-10">
            <Image className="rounded-full"
                src={David_Egleman}
                width={300}
                alt="david eagleman">
            </Image>
            <div className = "p-10">
            David Eagleman is a professor, neuroscientist, author, CEO. As the CEO of
Neosensory, Eagleman is working to restore senses such as hearing to those who have lost it and also to revolutionize the way we experience the world by creating new senses for humans.
            </div>
        </div>

        <div className = "md:flex p-10">
            <Image className="rounded-full"
                src={Nathan_Copeland}
                width={300}
                alt="nathan copeland">
            </Image>
            <div className = "p-10">
            Nathan Copeland is a BCI pioneer, neurotech consultant, and digital artist. Copeland holds the record for longest time living with a BCI implant and has operated more machines with his mind than any other individual.
            </div>
        </div>

        <h1 className = "p-10 font-bold text-4xl">Industry Panelists</h1>

        <div className = "md:flex p-10">
            <Image className="rounded-full"
                src={Chloe_Duckworth}
                width={200}
                height={200}
                alt="chloe duckworth">
            </Image>
            <div className = "p-10 w-fit">
            Chloe Duckworth is a trailblazer in the field of computational neuroscience, harnessing her expertise to pioneer advancements at the intersection of voice, affective computing, conversational intelligence, and neurodiversity. With a fervent dedication to advocating for underserved communities, both in Los Angeles and around the world, Chloe has become a driving force for positive change.
            </div>
        </div>

        <div className = "md:flex p-10">
            <Image className="rounded-full"
                src={Sharena_Rice}
                width={200}
                height={200}
                alt="sharena rice">
            </Image>
            <div className = "p-10 w-fit">
            Dr. Sharena Rice is a visionary thinker and neuroscientist on a mission to transform suffering into innovation. With a remarkable ability to visualize solutions and conduct thought experiments, Sharena channels her creativity and intellect into bringing tangible solutions to real-world problems. Dr. Rice’s focus has crystallized around the intersection of neuroscience, technology, and human connection. As a scientist dedicated to delving into the root causes of societal challenges, she leverages her expertise to develop solutions that address these issues at their core. Through her writings on neurotechnology for corporate audiences and her role in mitigating risks, Dr. Sharena Rice is at the forefront of shaping the future of innovation.
            </div>
        </div>

        <div className = "md:flex p-10">
            <Image className="rounded-full"
                src={Caitlin_Ner}
                width={200}
                height={200}
                alt="sharena rice">
            </Image>
            <div className = "p-10 w-fit">
            Caitlin Santos is a trailblazing Filipina American whose life is a testament to creativity, empathy, and resilience. With an unwavering commitment to mental health advocacy, Caitlin's journey has taken her across all 50 states of the USA and around the world, shaping her into a compassionate and adventurous explorer. Currently serving as Chief of Staff at PsyMed Ventures, an emerging VC fund investing in the future of mental health and wellness, Caitlin continues to be a beacon of leadership and advocacy. With a deep-seated passion for art, technology, and connection, she strives to make a positive impact in mental health, diversity and inclusion, and workplace wellness.
            </div>
        </div>

        <div className = "md:flex p-10">
            <Image className="rounded-full"
                src={Gail_Gannon}
                width={200}
                height={200}
                alt="gail gannon">
            </Image>
            <div className = "p-10 w-fit">
            Gail Gannon has dedicated her mission towards reshaping healthcare through her transdisciplinary approach. With a focus on reducing bottlenecks and optimizing processes, she collaborates with major providers like Stanford and UCSF, as well as startups worldwide. Drawing on her therapeutics background, Gail excels at forging impactful partnerships, mentoring entrepreneurs, and refining business strategies. She's known for guiding companies towards lucrative markets while aligning with UN SDGs and ESG criteria. Gannon is passionate about engaging with industry leaders to drive forward healthcare innovation through meaningful dialogue and connections.
            </div>
        </div>

        <h1 className = "p-10 font-bold text-4xl">Academic Panelists</h1>
        
        <div className = "md:flex p-10">
            <Image className="rounded-full"
                src={Virginia_de_Sa}
                width={200}
                height={200}
                alt="virginia de sa">
            </Image>
            <div className = "p-10 w-fit">
            Dr. Virginia de Sa is a distinguished professor at the Department of Cognitive Science at UC San Diego, where she spearheads groundbreaking research aimed at unraveling the mysteries of human perception and learning. With a keen focus on both neural and computational perspectives, Dr. de Sa's lab delves into the intricate workings of the human brain, exploring the computational properties of machine learning algorithms and deciphering the physiological underpinnings of human cognition.
            </div>
        </div>

        <div className = "md:flex p-10">
            <Image className="rounded-full"
                src={Sergey_Stavisky}
                width={200}
                height={200}
                alt="sergey stavisky">
            </Image>
            <div className = "p-10 w-fit">
            Sergey Stavisky is a neuroscientist and neural engineer developing devices to restore movement to people with paralysis. He fell hard for this new nascent field as an undergraduate at Brown University, and after graduating got involved in the BrainGate clinical trial, one of the first testing an intracortical brain-machine interface. Sergey then completed his Ph.D. at Stanford with Professor Krishna Shenoy, where his work focused on improving movement neural prostheses and on understanding how the brain incorporates this new output channel into its motor system. Sergey is now a postdoctoral fellow in Stanford’s Neural Prosthetics Translational Laboratory, developing technology to allow our clinical trial participants to accurately and intuitively move robotic arms with their minds.
            </div>
        </div>

        <div className = "md:flex p-10">
            <Image className="rounded-full"
                src={Lee_Miller}
                width={200}
                height={200}
                alt="lee miller">
            </Image>
            <div className = "p-10 w-fit">
            Lee Miller...
            </div>
        </div>

        <div className = "md:flex p-10">
            <Image className="rounded-full"
                src={Karen_Moxon}
                width={200}
                height={200}
                alt="virginia de sa">
            </Image>
            <div className = "p-10 w-fit">
            Karen Moxon...
            </div>
        </div>

        <div className = "md:flex p-10 justify-center">
            <Image className="rounded-full"
                src={Jonathon_Schofield}
                width={200}
                height={200}
                alt="virginia de sa">
            </Image>
            <div className = "p-10 w-fit">
            Jonathon Schofield...
            </div>
        </div>

        <div className = "md:flex p-10">
            <Image className="rounded-full"
                src={Jose_Munoz}
                width={200}
                height={200}
                alt="jose munoz">
            </Image>
            <div className = "p-10 w-fit">
            Jose Munoz...
            </div>
        </div>
        
        <script async src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
      </main>
    );
  }