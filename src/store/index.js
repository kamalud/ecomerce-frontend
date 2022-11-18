import axios from 'axios'
import { createStore } from 'vuex'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'
// import {auth} from './auth'
export default createStore({
  state: {
    token : localStorage.getItem('accressToken') || null,
    admintoken : localStorage.getItem('adminToken') || null,
   },
   getters: {
     LogedIn(state){
        return state.token !== null;
     },

     AdminLogedIn(state){
      return state.admintoken !== null;
   },
   },
   mutations: {
     setToken(state,token){
        state.token =token;
     },
     removeToken(state){
       state.token = null;
     },

     AdminSetToken(state){
      state.admintoken = null;
     },

     AdminRemoveToken(state){
      state.admintoken = null;
     }


    },
  actions: {
    login(context,formData){
      return new Promise((resolve,reject)=>{
        axios.post('user/login',formData).then(response=>{
          localStorage.setItem('accressToken',response.data.data.token);
          context.commit('setToken',response.data.data.token);
          resolve(response.data);
        }).catch(error=>{
          reject(error);
        })
      })
    },
    register(context,formData){
      return new Promise((resolve,reject)=>{
        axios.post('user/register',formData).then(response=>{
          localStorage.setItem('accressToken',response.data.data.token);
          context.commit('setToken',response.data.data.token);
          resolve(response.data);
        }).catch(error=>{
          reject(error);
        })
      })  
    },

    logout(context){
      return new Promise((resolve,reject)=>{
        axios.defaults.headers.common['Authorizition'] = "Beares" + context.getters.token ;
        axios.post('user/logout').then(response=>{
          localStorage.removeItem('accressToken');
          context.commit('removeToken');
          resolve(response.data);
        }).catch(error=>{
          reject(error);
        })
      })
    },

    // AdminLogin system ==================================

    AdminLogin(context,formData){
      return new Promise((resolve,reject)=>{
        axios.post('admin/login',formData).then(response=>{
          localStorage.setItem('adminToken',response.data.data.token);
          context.commit('AdminSetToken',response.data.data.token);
          resolve(response.data);
        }).catch(error=>{
          reject(error);
        })
      })
    },


    Adminlogout(context){
      return new Promise((resolve,reject)=>{
        axios.defaults.headers.common['Authorizition'] = "Beares" + context.getters.token ;
        axios.post('admin/logout').then(response=>{
          localStorage.removeItem('adminToken');
          context.commit('AdminRemoveToken');
          resolve(response.data);
        }).catch(error=>{
          reject(error);
        })
      })
    },


  },
  modules: {
    
  }
})
