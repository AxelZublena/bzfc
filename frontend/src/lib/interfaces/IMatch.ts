import type { ImageAsset, Slug } from '@sanity/types';
import type { PortableTextBlock } from '@portabletext/types';

export interface IMatch {
    date: string;
    butbzfc: number;
    equipeAdverse: string;
    butEquipeAdverse: number;
    slug: Slug;
    image: ImageAsset;
    body?: PortableTextBlock[];
}
