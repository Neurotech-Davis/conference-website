import Iframe from 'react-iframe'

export default function Stream() {
  return (
    <main>
        <div className="py-60 p-10 align-middle items-center">
            <h1 className="text-2xl">Stream</h1>
              <Iframe
                url="https://youtu.be/dQw4w9WgXcQ?si=VS_gYkbhmlkxu1sS"
                width="640px"
                height="320px"
                id=""
                className=""
                display="block"
                position="relative"
              />
        </div>
    </main>
  );
}
