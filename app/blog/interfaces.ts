import { Document } from '@contentful/rich-text-types';

export interface BlogPost {
    title: string
    slug: string
    thumbnail: {
      url: string 
      width: number
      height: number
    }
    excerpt: string;
    content: Document;
}

export type Asset = {
    metadata: {
        tags: any[];
    };
    sys: any;
    fields: {
        title: string;
        description: string;
        file: {
            url: string;
            details: {
                size: number;
                image: {
                    width: number;
                    height: number;
                };
            };
            fileName: string;
            contentType: string;
        };
    };
};