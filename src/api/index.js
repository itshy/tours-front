import axios from 'axios'

export const getUserAccount = () => {
  return axios.get('http://localhost:3333/api/v1/test')
}

export const addNewTourDB = (tours) => {
  return axios.post('http://localhost:3333/tours', tours)
}

export const getToursDB = () => {
  return (
    axios.get('http://localhost:3333/getTours')
  )
}

export const addComment = (idTour) => {
  return axios.post('http://localhost:3333/CommentController', idTour)
}

export const getComments = (tourID) => {
  return axios.get('http://localhost:3333/getComments', { params: { tourID: tourID } })
}

export const makeOrder = (tourID) => {
  return axios.post('http://localhost:3333/MakeOrderController', tourID)
}

export const sortByPriceUp = (countTours) => {
  return axios.get('http://localhost:3333/SortByPriceUp', { params: { countTours: countTours } })
}

export const sortByPriceDown = (countTours) => {
  return axios.get('http://localhost:3333/SortByPriceDown', { params: { countTours: countTours } })
}

export const loadMore = (countTours) => {
  return axios.get('http://localhost:3333/LoadMore', { params: { countTours: countTours } })
}