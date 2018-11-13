const initialState = {
  id: "загрузка",
  name: "загрузка",
  about: "загрузка",
  price: "загрузка",
  rate: "загрузка",
  active: "загрузка",
  img: "",
}

export const tour = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_TOUR":
      return {
        id: action.tour.id,
        name: action.tour.name,
        about: action.tour.about,
        price: action.tour.price,
        rate: action.tour.rate,
        active: action.tour.active,
        img: action.tour.img,
      }
    
    default:
      return state
  }
}