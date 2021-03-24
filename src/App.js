
import './App.css';
import Navbar from './components/Navbar'
import Home from  './components/pages/Home'

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
      
          <Navbar/>
          <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/about">
           
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
