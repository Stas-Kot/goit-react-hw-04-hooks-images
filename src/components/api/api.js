import axios from 'axios';

const api_KEY = '21750958-271f4873848cc9d3a2fe2c382';

const getImages = async (query, page, per_page) => {
  const response = await axios({
    method: 'GET',
    url: `https://pixabay.com/api/?q=${query}&page=${page}&key=${api_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
  });
  return response.data;
};

export default getImages;
