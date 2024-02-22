import Image from 'next/image'
import ntb_logo from '../../public/ntb.png'
import angry from '../../public/angry.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Home() {
  return (
    <main>
        <div className="p-40 flex flex-row justify-between">
          <div className="flex flex-col">
            <div>
              <div className="flex flex-row font-outfit text-4xl">
                Explore the
                &nbsp;
                <h1 className="font-bold font-outfit text-4xl">
                  new wave
                &nbsp;
                </h1>
              </div>
              <div className="flex flex-row font-outfit text-4xl">
                of
                &nbsp;
                <span className="font-bold font-outfit text-4xl">Neurotechnology.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-poppins text-4xl">XX.XX.2024</span>
            <div className="font-poppins text-3xl">LOCATION</div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center place-items-center">
          <span className="flex font-outfit text-2xl">
            Presented By
          </span>
        </div>
        
        <div className="py-10 px-40 flex flex-row justify-between">
          
          <div className='flex flex-col items-center'>
            <div className='h-24 w-24 flex items-center justify-center'>
              <Image
                src={ntb_logo}
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
        
          <div className='flex flex-col items-center'>
            <div className='h-24 w-24 flex items-center justify-center'>
                <Image
                  src={ntb_logo}
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

          <div className='flex flex-col items-center'>
            <div className='h-24 w-24 flex items-center justify-center'>
                <Image
                  src={ntb_logo}
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
        
          <div className='flex flex-col items-center'>
            <div className='h-24 w-24 flex items-center justify-center'>
                <Image
                  src={ntb_logo}
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

          <div className='flex flex-col items-center'>
            <div className='h-24 w-24 flex items-center justify-center'>
                <Image
                  src={ntb_logo}
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
        </div>

        <div className="flex flex-row items-start bg-blue-900">
          <div className="items-start">
            <Image
                src={angry}
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
              <div className="flex flex-shrink font-outfit text-blue-900 bg-red-100 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-none text-sm px-6 py-2 text-center align-middle">
                  Learn More
                  <ChevronRightIcon/>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-row justify-center align-baseline py-11">
          <span className="flex font-outfit text-2xl">
            Speakers
          </span>
        </div>

    </main>
  );
}
