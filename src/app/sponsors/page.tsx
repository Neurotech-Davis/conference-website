import Image from 'next/image';
import ucla_brain from '../../../public/ucla_brain.jpeg'
import sponsor_2 from '../../../public/sponsor_2.jpeg'


export default function Members() {
  return (
    <main>
      <div className="py-60 flex flex-col min-h-screen p-10">
        <div className=" flex flex-col pt-8 items-center">
          <Image className="rounded-md"
            src={ucla_brain}
            width={300}
            height={300}
            alt="Logo">
          </Image>
          <div className="flex flex-col p-8 items-center">
            <span className="font-semibold text-pretty text-lg">
              UCLA Training in Neurotechnology Translation
            </span>
            {/* <div className=" flex">
                  Amount of money
                </div> */}
          </div>

          <Image className="rounded-md pt-10"
            src={sponsor_2}
            width={500}
            height={500}
            alt="Logo">
          </Image>
          <div className=" flex flex-col p-8 items-center">
          <span className="font-semibold text-pretty text-lg">
              UC Davis Center for Neuroengineering and Medicine
            </span>
            {/* <div className=" flex">
                  Amount of money
                </div> */}
          </div>

        </div>
      </div>
      <script async src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
    </main>
  );
}
