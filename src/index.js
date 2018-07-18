import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Home from './Home';
import Submit from './Submit';
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
             {/*<li className="active"><NavLink to="/">Home<span className="sr-only">(current)</span></NavLink></li>*/}
             <li><NavLink activeClassName="activeNav" to="/submit">Submit</NavLink></li>
           </ul>
         </div>
       </div>
     </nav>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/submit' component={Submit}></Route>
     </div>
     {/*<ul>*/}
       {/*<li><Link to='/'>Home</Link></li>*/}
       {/*<li><Link to="/submit">Submit</Link></li>*/}
     {/*</ul>*/}
     {/*<hr/>*/}

  </Router>
  ,document.getElementById('root'));

registerServiceWorker();
