import axios from 'axios';



export const fetchImages = (query) =>{
   return axios.get(`https://pixabay.com/api/?q=${query}&page=1&key=30087665-92eb3edde2a629aded169ee28&image_type=photo&orientation=horizontal&per_page=12`);
 ;
}
