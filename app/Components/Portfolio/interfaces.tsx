import { StaticImageData } from "next/image";

export interface PortfolioProp {
        src: StaticImageData,
        alt: string,
        title: string,
        link: string
}