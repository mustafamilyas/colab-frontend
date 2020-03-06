import axios from 'axios';

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  transformRequest: [
    (data, headers)=>{
      return JSON.stringify(data)
    }, ...axios.defaults.transformRequest
  ]
});

export default service;
