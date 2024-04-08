import Image from 'next/image';
import ucla_brain from '../../../public/ucla_brain.jpeg'

export default function Members() {
    return (
        <main>
            <div className="py-60 flex flex-col min-h-screen p-10">
                <div className=" flex flex-col pt-8 items-center">
                    <Image className="rounded-full"
                        src={ucla_brain}
                        width={100}
                        height={100}
                        alt="Logo">
                    </Image>
                    <div className=" flex flex-col p-8 items-center">
                        UCLA Training in Neurotechnology Translation
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