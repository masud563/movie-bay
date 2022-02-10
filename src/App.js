import Movie from './component/movie/Movie';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import LoginForm from './component/loginForm/LoginForm';
import RegisterForm from './component/registerForm/RegisterForm';
import Rentals from './component/rentals/Rentals';
import Customers from './component/customers/Customers';
import NotFound from './component/notFound/NotFound';
import MovieForm from './component/movieForm/MovieForm';
import Home from './component/home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route path = '/register' component={RegisterForm} />
      <Route path = '/rentals' component={Rentals} />
      <Route path = '/customers' component={Customers} />
      <Route path = '/movie/:id' component={MovieForm} />
      <Route path = '/movie' component={Movie} />
      <Route path = '/login' component = {LoginForm} />
      <Route path = '/notFound' component={NotFound} />
      <Redirect from ='/' to='/movie' />
      <Route path= '/' exact component={Home} />
      <Redirect to = '/notFound' />
      </Switch>
    </div>
  );
}

export default App;
