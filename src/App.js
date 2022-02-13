import Movie from './component/movie/Movie';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import LoginForm from './component/loginForm/LoginForm';
import RegisterForm from './component/registerForm/RegisterForm';
import Rentals from './component/rentals/Rentals';
import Customers from './component/customers/Customers';
import NotFound from './component/notFound/NotFound';
import EditMovieForm from './component/editMovieForm/EditMovieForm';
import AddMovieForm from './component/addMovieForm/AddMovieForm';
import Home from './component/home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <div className='w-4/5 mx-auto pt-8'>
      <Switch>
      <Route path = '/register' component={RegisterForm} />
      <Route path = '/rentals' component={Rentals} />
      <Route path = '/customers' component={Customers} />
      <Route path = '/movie/new' component={AddMovieForm} />
      <Route path = '/movie/:id' component={EditMovieForm} />
      <Route path = '/movie' component={Movie} />
      <Route path = '/login' component = {LoginForm} />
      <Route path = '/notFound' component={NotFound} />
      <Redirect from ='/' to='/movie' />
      <Route path= '/' exact component={Home} />
      <Redirect to = '/notFound' />
      </Switch>
      </div>
    </div>
  );
}

export default App;
