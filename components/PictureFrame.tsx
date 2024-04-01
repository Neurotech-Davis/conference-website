import React from 'react';
import Image, { StaticImageData } from 'next/image'

interface ImageDivProps {
    image: StaticImageData;
  }

const ImageDiv: React.FC<ImageDivProps> = ({ image }) => {
    return (
        <Image
            src={image}
            width={150}
            height={150}
            alt="Logo"
            className="rounded-full overscroll-hidden"
        />
    );
};

export default ImageDiv;