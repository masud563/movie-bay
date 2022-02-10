const movies = [
  {
    _id: 1,
    title: 'Terminator',
    genre: {
      _id: 10,
      name: 'Action'
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: '2018',
    isFav: true,
  },
  {
    _id: 2,
    title: 'Die Hard',
    genre: {
      _id: 10,
      name: 'Action'
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    isFav: false,
  },
  {
    _id: 3,
    title: 'Get Out',
    genre: {
      _id: 11,
      name: 'Thriller'
    },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    isFav: false,
  },
  {
    _id: 4,
    title: 'Trip to Italy',
    genre: {
      _id: 12,
      name: 'Comedy'
    },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    isFav: true,
  },
  {
    _id: 5,
    title: 'Thor',
    genre: {
      _id: 10,
      name: 'Action'
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: '2018',
    isFav: true,
  },
  {
    _id: 6,
    title: 'Venom',
    genre: {
      _id: 10,
      name: 'Action'
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    isFav: false,
  },
  {
    _id: 7,
    title: 'Jack Reacher',
    genre: {
      _id: 11,
      name: 'Thriller'
    },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    isFav: false,
  },
  {
    _id: 8,
    title: 'Friends',
    genre: {
      _id: 12,
      name: 'Comedy'
    },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    isFav: true,
  },
  {
    _id: 9,
    title: 'Shan-chi',
    genre: {
      _id: 12,
      name: 'Comedy'
    },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    isFav: true,
  },
];

export function getMovies() {
  return movies;
}
export function getMovie(id){
  return movies.find(movie => movie._id ===id);
}