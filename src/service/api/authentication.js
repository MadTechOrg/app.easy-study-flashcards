import axios from '../config'

export const register = ({ email, name, password }) => new Promise((resolve, reject) => {
  axios
    .post('/register', { email, name, password })
    .then((res) => {
      resolve(res.data)
    })
    .catch((error) => {
      reject(error)
    })
})

export const login = ({ email, password }) => new Promise((resolve, reject) => {
  axios
    .post('/session', { email, password })
    .then((res) => {
      resolve(res.data)
    })
    .catch((error) => {
      reject(error)
    })
})
