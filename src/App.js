import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Feedback from './components/Feedback/Feedback';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      
      <div className="container-fluid" style={{margin: 0, padding: 0}}>
        <Header></Header> 
        <div style={{height:'20px'}}></div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/courses">
          <Courses></Courses>
        </Route>
        <Route path="/feedback">
          <Feedback></Feedback>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
