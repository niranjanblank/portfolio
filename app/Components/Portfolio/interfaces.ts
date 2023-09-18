import { StaticImageData } from "next/image";

export interface PortfolioProp {
        src: string;
        alt: string;
        title: string;
        link: string;
        desc: string;
        tags: tags[] | null;
}

export interface tags {
        tag: string,
        color: string
}