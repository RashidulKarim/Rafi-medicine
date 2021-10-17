import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUS/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Ragistration from './Pages/Registration/Ragistration';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
        <Route path='/ragister'>
          <Ragistration></Ragistration>
        </Route>
        <Route path='/about'>
          <AboutUs></AboutUs>
        </Route>
        <Route path='/contact'>
          <ContactUs></ContactUs>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
