import Vue from 'vue';
import axios from 'axios';
let baseUrl = '';
const http = {
  install () {
    Vue.prototype.axiosGet = (url) => {
      return new Promise((resolve, reject) => {
        axios
        .get(baseUrl + url)
        .then(response => {
          resolve(response.data);
        }).finally();
      }
      )
    }
  }
}
export default http;
