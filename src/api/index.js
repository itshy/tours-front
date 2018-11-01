import axios from 'axios'

export const getUserAccount = () => {
  return axios.get('http://localhost:3333/api/v1/test');
}

export const addNewTourDB = (tours) => {
  return axios.post('http://localhost:3333/tours', tours);
}

export const getToursDB = () => {
  return (
    axios.get('http://localhost:3333/getTours')
      // .then((response) => {
      //   return response.data
      // })
  )
}