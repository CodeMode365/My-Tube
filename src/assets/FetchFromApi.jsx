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
    "X-RapidAPI-Key": `cfbcf34bcbmsh1adae59f7c787a2p1dcec4jsn710439a8e21a`,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const FetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export default FetchFromApi;
