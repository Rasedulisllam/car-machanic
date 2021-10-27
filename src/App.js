
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddService from './pages/AddService/AddService';
import ServiceMenagmant from './pages/ServiceMenagmant/ServiceMenagmant';
import UpdateService from './pages/UpdateService/UpdateService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route  path='/home'>
              <Home></Home>
            </Route>
            <Route  path='/serviceMenage'>
              <ServiceMenagmant></ServiceMenagmant>
            </Route>
            <Route  path='/updateService/:id'>
              <UpdateService></UpdateService>
            </Route>
            <Route  path='/addService'>
              <AddService></AddService>
            </Route>
            <PrivateRoute  path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route  path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
