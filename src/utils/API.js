import axios from "axios";
// const URL_PREFIX= "http://localhost:8080"
const URL_PREFIX= "https://enigmatic-waters-59072.herokuapp.com"

const API = {
    getAllCats : ()=>{
        return axios.get(`${URL_PREFIX}/api/cats`)
    },
    createCat:newCat=>{
        return axios.post(`${URL_PREFIX}/api/cats`,{name:newCat})
    },
    deleteCat: id=>{
        return axios.delete(`${URL_PREFIX}/api/cats/${id}`)
    }
}

export default API