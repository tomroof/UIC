import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://neonaddict.xyz',
  timeout: 50000,
  headers: {},
  withCredentials: false
})

const simpleRequest = (url, method, data, headers) => {
  const requestObj = {
    url,
    method,
    data,
    headers: {
      ...headers
    }
  };
  console.log('requestObj', requestObj)
  return axiosInstance.request(requestObj)
}

const post = (url, data, headers = {}) => {
  return simpleRequest(url, "post", data, headers);
}

export const postNewUser = (character, age, gender, team) => {
  const serverData = {
    user: {
      character,
      age,
      gender,
      team
    }
  }
  return post('/api/v1/users/create_user', serverData,
  {'Content-Type': 'application/json'})
  .then(response => response.data)
  .catch(error => console.log('postNewUser request error', error))
}

export const postNewAnswer = (uuid, course_id, question_id, question_type, is_correct = true, points = null ) => {
  const serveData = {
    answer: {
      course_id,
      question_id,
      question_type,
      is_correct,
      points
    }
  }
  return post(`/api/v1/users/${uuid}/create_answer`, serveData,
  {'Content-Type': 'application/json'})
  .then(response => response.data)
  .catch(error => console.log('postNewUser request error', error))
}
