export const addTour = (id, name, about, price, rate, active) => ({
  type: "ADD_TOUR",
  tour: {
    id: id,
    name: name,
    about: about,
    price: price,
    rate: rate,
    active: true,
  }
})

// в диспатч кинуть addTour, а в него передать id, name, price

export const sortTours = (tours) => ({
  type: "sortTours",
  tours: tours,
})