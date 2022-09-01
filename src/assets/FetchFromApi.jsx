import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    part: "id,snippet",
    // type: 'video',
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": `5cdc1396a1msh6fd5ceb0ee450f4p1c5cf9jsn28498e322560`,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const FetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export default FetchFromApi;
