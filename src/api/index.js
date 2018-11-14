import axios from 'axios'


export const addNewTourDB = (tours) => {
  return axios.post('http://localhost:3333/api/v1/tours', tours)
}

export const getToursDB = () => {
  return (
    axios.get('http://localhost:3333/api/v1/getTours')
  )
}

export const addComment = (idTour) => {
  return axios.post('http://localhost:3333/api/v1/CommentController', idTour)
}

export const getComments = (tourID) => {
  return axios.get('http://localhost:3333/api/v1/getComments', { params: { tourID: tourID } })
}

export const makeOrder = (tourID) => {
  return axios.post('http://localhost:3333/api/v1/MakeOrderController', tourID)
}

export const sortByPriceUp = (countTours) => {
  return axios.get('http://localhost:3333/api/v1/SortByPriceUp', { params: { countTours: countTours } })
}

export const sortByPriceDown = (countTours) => {
  return axios.get('http://localhost:3333/api/v1/SortByPriceDown', { params: { countTours: countTours } })
}

export const loadMore = (countTours) => {
  return axios.get('http://localhost:3333/api/v1/LoadMore', { params: { countTours: countTours } })
}