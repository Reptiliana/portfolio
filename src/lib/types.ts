export interface Work {
    title: string;
    slug: string;
    description_en: string;
    description_es: string;
    short_description_en: string;
    short_description_es: string;
    assets: Array<{
        type: string;
        url: string;
    }>;
    url: string;
    techs: Array<{
        name: string;
        icon: string;
        isImage?: boolean;
    }>;
    clients: Array<string>;
    client_url: Array<string>;
    client_logos?: Array<string>;
    subprojects: number;
    type: string;
    tags: Array<string>;
    order?: number;
}