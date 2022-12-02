import axios from 'axios';

const BASE_URL = 'https://api.imgflip.com/get_memes';

export const getAllMemes = () => axios.get(`${BASE_URL}`);

// export const getSingleMeme = (memeId) => axios.get(`${BASE_URL}`);
