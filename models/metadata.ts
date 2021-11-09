
export interface Attribute {
    id?: number;
    trait_type: string;
    value: string | number;
    rarity?: string;
    display_type?: string;
    max_value?: number;
}

export interface MetadataInterface {
    id: number;
    name: string;
    description: string;
    image: string;
    hash: string;
    date: number;
    animation_url?: string;
    external_url?: string;
    attributes: Attribute[];
}

export interface MetadataRequestInterface {
    body: MetadataInterface;
}