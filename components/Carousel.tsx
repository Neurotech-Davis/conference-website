import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import ImageDiv from './PictureFrame';

import David_Egleman from '../public/David_Eagleman.png';
import Jonathan_Wolpaw from '../public/Jonathan_Wolpaw.png';
import Nathan_Copeland from '../public/Nathan_Copeland.jpg';
import Sergey_Stavisky from '../public/Sergey_Stavisky.jpg';
import Sharena_Rice from '../public/Sharena_Rice.png';
import Chloe_Duckworth from '../public/Chloe_Duckworth.png';
import Caitlin_Ner from '../public/Caitlin_Ner.png';
import Virginia_de_Sa from '../public/Virginia_de_Sa.png';
import Lee_Miller from '../public/Lee_Miller.jpg';
import Karen_Moxon from '../public/Karen_Moxon.jpg';
import Jonathon_Schofield from '../public/Jonathon_Schofield.jpg';
import Jose_Munoz from '../public/Jose_Munoz.jpg';
import Gail_Gannon from '../public/Gail_Gannon.jpg';


export default function Carasouel() {
  return (
    <Carousel show={3} slide={1} transition={0.5} infinite={true} useArrowKeys={true} autoSwipe={2000} swiping={true} responsive={true}>
      <div className="flex flex-col align-middle items-center">
        <ImageDiv image={David_Egleman} />
        <p>
          David Eagleman
        </p>
      </div>
      <div className="flex flex-col align-middle items-center text-center">
        <ImageDiv image={Nathan_Copeland} />
        <p>
          Nathan Copeland
        </p>
      </div>
      <div className="flex flex-col align-middle items-center text-center">
        <ImageDiv image={Sergey_Stavisky} />
        <p>
          Sergey Stavisky
        </p>
      </div>
      <div className="flex flex-col align-middle items-center text-center">
        <ImageDiv image={Sharena_Rice} />
        <p>
          Sharena Rice
        </p>
      </div>
      <div className="flex flex-col align-middle items-center">
        <ImageDiv image={Chloe_Duckworth} />
        <p>
          Chloe Duckworth
        </p>
      </div>
      <div className="flex flex-col align-middle items-center">
        <ImageDiv image={Caitlin_Ner} />
        <p>
          Caitlin Ner
        </p>
      </div>
      <div className="flex flex-col align-middle items-center">
        <ImageDiv image={Virginia_de_Sa} />
        <p>
          Virginia de Sa
        </p>
      </div>
      <div className="flex flex-col align-middle items-center">
        <ImageDiv image={Lee_Miller} />
        <p>
          Lee Miller
        </p>
      </div>
      <div className="flex flex-col align-middle items-center">
        <ImageDiv image={Karen_Moxon} />
        <p>
          Karen Moxon
        </p>
      </div>
      <div className="flex flex-col align-middle items-center">
        <ImageDiv image={Jonathon_Schofield} />
        <p>
          Jonathon Schofield
        </p>
      </div>
      <div className="flex flex-col align-middle items-center">
        <ImageDiv image={Jose_Munoz} />
        <p>
          Jose Munoz
        </p>
      </div>
      <div className="flex flex-col align-middle items-center">
        <ImageDiv image={Gail_Gannon} />
        <p>
          Gail Gannon
        </p>
      </div>
    </Carousel>
  );

}