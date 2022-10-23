export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JxdoFObYj0skferL5DCvmG4t09P0KAxK&q=${ category }&limit=10`
    const response = await fetch(url);
    
    const { data } = await response.json();
    
    const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({
        id,
        title,
        url
    }));

    return gifs;
}   