// Начальное состояние reducer'a
const initialState = [
  {
    id: 0,
    name: "USA",
    about: "Краткое описание данного тура",
    price: 2000,
    rate: 5,
    active: true,
  },
  {
    id: 1,
    name: "Belarus",
    about: "Краткое описание данного тура",
    price: 4000,
    rate: 4,
    active: true,
  },
  {
    id: 2,
    name: "Japan",
    about: "Краткое описание данного тура",
    price: 1000,
    rate: 5,
    active: true,
  },
]

// tours - это reducer - в него передаем начальное состояние и action
export const tours = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOUR':
      return [
        ...state,
        {
          id: action.tour.id,
          name: action.tour.name,
          about: action.tour.about,
          price: action.tour.price,
          rate: action.tour.rate,
          active: action.tour.active,
        }
      ]

    // Перезаписываем массив, т.к. при возвате action.tours, Redux не считает это изменением и React в итоге не перерендеривает компонент
    case 'sortTours':
      const toursBuf = []
      for (let i = 0; i < action.tours.length; i++) {
        toursBuf.push({
          id: action.tours[i].id,
          name: action.tours[i].name,
          about: action.tours[i].about,
          price: action.tours[i].price,
          rate: action. tours[i].rate,
          active: action.tours[i].active,
        })
      }
      return toursBuf

    default:
      return state
  }
}