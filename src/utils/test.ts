import { getCollection } from 'astro:content';
export async function getPages() {
    try {
        const allPages = await getCollection('docs');
        const paths = allPages;
        return Object.fromEntries(paths.map(({ id, slug, data }) => [id, { data, slug }]));
    } catch (error) {
        console.error(error)
        throw new Error("");
        
    }
}