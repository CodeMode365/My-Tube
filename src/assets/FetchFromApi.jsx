import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    // type: 'video',
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": `KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA`,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchFromApi = async (url) => {
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/search?q=${url}`,
    options
  );
  // const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
