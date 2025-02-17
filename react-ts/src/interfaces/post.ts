export interface IPost {
    id?: number;
    title: string;
    slug: string;
    content: string;
    // category: {
    //     id: number;
    // };
    status?: string;
    // createdAt: string;
    // publishedAt: string;
    images: Array<{
        url: string;
        name: string;
        status: string;
        type: string;
    }>;
}