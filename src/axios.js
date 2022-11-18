import axios from "axios"
const baseURL = "http://127.0.0.1:8000/api/v1" ;

// const token = localStorage.setItem('token');
export default axios.create({
    baseURL,
    headers:{
        "Content-type":"aplication/json",
        Authorization :'Bearer $(token)'
    }
})

// const axios = (token) =>{
//     if(token){
//         baseURL,
//       axios.defaults.headers = {

//            "Content-type":"Aplication/json",
//            Authorization :"Bearer " + token
//       }
//     }else{
//       delete axios.default.headers.Authorization
//     }
// }

// export default axios;