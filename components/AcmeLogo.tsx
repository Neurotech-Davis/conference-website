import React from "react";
import Image from "next/image";
import svgIcon from '../assets/LogoBLC.svg'

export const Logo  = () => (
    <div>
      <Image
        src={svgIcon}
        alt="My SVG"
        width={150}
        height={150}
      />
    </div>
);