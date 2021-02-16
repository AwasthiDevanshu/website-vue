import "regenerator-runtime/runtime";
import axios from 'axios'

const HTTP = axios.create({
  //baseURL: `https://backend.conicskill.com/`,
  baseURL: `https://backend.cprep.in/`,
  crossDomain: true,
  headers: {
  }
})


export const ajaxCallMixin = {
  response: {},
  methods: {
    ajaxCall: async function (url, data, callBack = null, extraFields = []) {
      var form = new FormData()
      var params = JSON.stringify(data)
      form.append('body', params)
      for (let [key, value] of Object.entries(extraFields)) {
        form.append(key, value);
      }
      HTTP.post(url, form).then(res => {
        // do good things
        if (callBack != null) {
          return callBack(res.data)
        }
      }).catch(err => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          var res = err.response;
          if (callBack != null) {
            return callBack(res.data)
          }
        }
        console.log(err);
      })
    }
  },

}
