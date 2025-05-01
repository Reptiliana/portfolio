import { error } from '@sveltejs/kit';
import works from '$lib/data/works.js';
 
export function load({ params }: { params: { slug: string } }) {
  if (params.slug) {
    const work = works.find(work => work.slug === params.slug);
    if(!work) throw error(404, 'Not found');
    return { ...work };
  }
 
  throw error(404, 'Not found');
}