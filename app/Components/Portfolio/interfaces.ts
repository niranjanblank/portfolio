export interface PortfolioProp {
        src: string;
        index: number;
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