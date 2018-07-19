import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home';
import Submit from './Components/Submit';
// import About from './Components/About';
import Trial from './Components/Trial';
import Practice from './Components/Practice';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

ReactDOM.render(
  <Router>
   <div className='container'>
     <nav className="navbar navbar-default">
       <div className="container-fluid">
         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           <ul className="nav navbar-nav">
             <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
             {/*<li><NavLink activeClassName="activeNav" to="/about">About</NavLink></li>*/}
             <li><NavLink activeClassName="activeNav" to="/submit">Submit</NavLink></li>
             <li><NavLink activeClassName="activeNav" to="/trial">Trial</NavLink></li>
             <li><NavLink activeClassName="activeNav" to="/practice">Practice</NavLink></li>
           </ul>
         </div>
       </div>
     </nav>
      <Route exact path='/' component={ Home }/>
      {/*<Route exact path='/About' component={ About }></Route>*/}
      <Route exact path='/submit' component={ Submit }></Route>
      <Route exact path='/trial' component={ Trial }></Route>
      <Route exact path='./practice' component={ Practice }></Route>
     </div>

  </Router>
  ,document.getElementById('root'));

registerServiceWorker();
