import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';

export const getVideoCardsByProductSlug = async (slug: string) => {
  const VIDEO_CARDS_QUERY = defineQuery(`
    *[_type == "videoCard" && references(*[_type == "product" && slug.current == $slug][0]._id)]{
      _id,
      title,
      description,
      "videoUrl": video.asset->url
    }
  `);

  try {
    const videoCards = await sanityFetch({
      query: VIDEO_CARDS_QUERY,
      params: { slug },
    });

    return videoCards.data || [];
  } catch (error) {
    console.error('Error fetching video cards by product slug:', error);
    return [];
  }
};