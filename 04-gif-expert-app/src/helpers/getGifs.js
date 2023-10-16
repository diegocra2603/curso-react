export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BCxYfgASSAm11D1id6PieLkpxAfBgCsI&q=${category}&limit=12`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const arrayFilter = data.filter( x => x.title.trim() !== '')
    
    const arrayWith10Values = arrayFilter.slice(0, 10);

    const gifs = arrayWith10Values.map(image => (
        {
            id: image.id,
            title: image.title,
            url: image.images.downsized_medium.url
        }
    ))

    return gifs
}