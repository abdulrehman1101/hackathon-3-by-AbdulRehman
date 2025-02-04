import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'oog2jh7b', // replace with your project ID
    dataset: 'production', // replace with your dataset name
    useCdn: true, // `false` if you want to ensure fresh data
});