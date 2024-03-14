import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import ImageDiv from './PictureFrame';

import David_Egleman from '../public/David_Eagleman.png';
import Jonathan_Wolpaw from '../public/Jonathan_Wolpaw.png';
import Nathan_Copeland from '../public/Nathan_Copeland.jpg';
import Sergey_Stavisky from '../public/Sergey_Stavisky.jpg';
import Sharena_Rice from '../public/Sharena_Rice.png';

export default function Carasouel() {

  return(
    <Carousel show={3} slide={1} transition={0.5} infinite={true} useArrowKeys={true} swiping={true} responsive={true}>
        <div className="flex flex-col align-middle items-center">
          <ImageDiv image={David_Egleman} />
            <p>
            David Egleman
            </p>
        </div>
        <div className="flex flex-col align-middle items-center text-center">
        <ImageDiv image={Nathan_Copeland} />
            <p>
            Nathan Copeland
            </p>
        </div>
        <div className="flex flex-col align-middle items-center">
          <ImageDiv image={Jonathan_Wolpaw} />
            <p>
            Jonathan Wolpaw
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
    </Carousel>
  );

}