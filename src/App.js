import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AboutUs from './Pages/AboutUS/AboutUs';
import AllProducts from './Pages/AllProducts/AllProducts';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Registration/Ragistration';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import UploadPrescription from './Pages/UploadPrescription/UploadPrescription';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthProvider> 
      <BrowserRouter>
      <div className="flex-grow">
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/register'>
        <Registration></Registration>
        </Route>
        <Route path='/about'>
          <AboutUs></AboutUs>
        </Route>
        <Route path='/contact'>
          <ContactUs></ContactUs>
        </Route>
        <PrivateRoute path='/product/:id'>
          <SingleProduct></SingleProduct>
        </PrivateRoute>
        <PrivateRoute path='/prescription'>
          <UploadPrescription></UploadPrescription>
        </PrivateRoute>
        <Route path='/products'>
          <AllProducts></AllProducts>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      </div>
      <Footer></Footer>
      </BrowserRouter> 
      </AuthProvider>
    </div>
  );
}

export default App;
