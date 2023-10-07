import type { ImageAsset, Slug } from '@sanity/types';
import type { PortableTextBlock } from '@portabletext/types';

export interface IMatch {
    title: string;
    slug: Slug;
    date: string;
    butbzfc: number;
    equipeAdverse: string;
    butEquipeAdverse: number;
    img: ImageAsset;
    body?: PortableTextBlock[];
}
