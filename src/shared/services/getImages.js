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



