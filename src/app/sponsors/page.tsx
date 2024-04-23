import Image from 'next/image';
import uclabri from '../../../public/sponsors/bri.png'
import davisne from '../../../public/sponsors/davis_neuroeng.png'
import careai from '../../../public/sponsors/careai.png'
import mbraintrain from '../../../public/sponsors/mbraintrain.png'
import uclatnt from '../../../public/sponsors/ucla_tnt.png'
import ntmc from '../../../public/sponsors/ntmc.png'


export default function Members() {
  return (
    <main>
      <div className="py-32 flex flex-col min-h-screen p-10">
        <div className="flex flex-col pt-8 items-center">
          <Image className = "p-10"
            src={uclabri}
            width={400}
            height={250}
            alt="UCLA BRI">
          </Image>

          <Image className = "p-10"
            src={davisne}
            width={600}
            height={250}
            alt="Davis Neuroengineering">
          </Image>

          <Image className = "p-10"
            src={careai}
            width={400}
            height={250}
            alt="care.ai">
          </Image>

          <Image className = "p-10"
            src={mbraintrain}
            width={400}
            height={250}
            alt="mBrainTrain">
          </Image>

          <Image className = "p-10"
            src={ntmc}
            width={400}
            height={250}
            alt="NTMC">
          </Image>

          <Image className = "p-10"
            src={uclatnt}
            width={600}
            height={250}
            alt="UCLA TNT">
          </Image>

        </div>
      </div>
      <script async src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
    </main>
  );
}
