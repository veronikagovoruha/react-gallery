import axios from "axios"

const instance = axios.create({
    baseURL: "https://pixabay.com/api/",
    params:{
      key: "13292952-c7bbdc2f0ed3c6a4beea574f1",
      image_type: "photo",
      orientation: "horizontal",
      per_page: 12
    }
})

export const getPosts = async(page = 1)=>{
    const {data} = await  instance("/", {
        params:{
            page,
        }
    });
    return data;
}

export const searchImages = async(q, page = 1) =>{
    const {data} = await instance("/", {
        params:{
            q,
            page
        }
    });
    return data;
}

// import axios from 'axios';

// export class PixabayApi {
//     #BASE_URL = 'https://pixabay.com/api/';
//     #API_KEY = '13292952-c7bbdc2f0ed3c6a4beea574f1';
//     #PER_PAGE = 40;
  
//     constructor() {
//       this.page = 1;
//     }
  
//     getPerPage() {
//       return this.#PER_PAGE;
//     }
  
//     fetchPhotos(query) {
//       return axios.get(`${this.#BASE_URL}`, {
//         params: {
//           q: query,
//           image_type: 'photo',
//           page: this.page,
//           per_page: this.#PER_PAGE,
//           orientation: 'horizontal',
//           safesearch: true,
//           key: this.#API_KEY,
//         },
//       });
//     }
  
//     incrementPage() {
//       this.page += 1;
//     }
//   }

