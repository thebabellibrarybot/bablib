
import React, { Component } from 'react'
import Navbar from './navbar';
import Home from './components/home';

import BabelTombs from './pgcomponents/babelTombs';
import BabelID from './pgcomponents/babelTombDetail'
import BabelMicrofilm from './pgcomponents/babelMicrofilm';

import BabelBlogls from './pgcomponents/babelBlogs';
import BabelBlogDeets from './pgcomponents/babelBlogDetails';

import BabelUsers from './pgcomponents/babelUsers';
import BabelReg from './pgcomponents/babelRegister';
import UserSpine from './pgcomponents/userspine';

import { BrowserRouter as Router, Route, Routes} from  'react-router-dom';



export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
  };

  render() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='content'>
          
          <Routes>
            <Route path = "/" element = {<Home/>}/>
          </Routes>

          <Routes> 
            <Route path = "/babeltombs/" element = {<BabelTombs/>}/>
          </Routes>
          <Routes>
            <Route path = "/babeltombs/:id" element = { <BabelID/> }/>
          </Routes>
          <Routes>
            <Route path = "/babeltombs/:id/:type" element = { <BabelMicrofilm/> }/>
          </Routes>
         

          <Routes>
            <Route path = "/babelusers" element = { <BabelUsers /> } />
          </Routes>
          <Routes>
            <Route path = "/register" element = { <BabelReg/>} />
          </Routes>
          <Routes>
            <Route path = "/userspine" element = { <UserSpine/> }/>
          </Routes>

          <Routes>
            <Route path = "/babelblogls" element = { <BabelBlogls/>}/>
          </Routes>
          <Routes>
            <Route path = "/babelblogls/:id" element = { <BabelBlogDeets/> }/>
          </Routes>



          

        </div>
      </div>
    </Router>
    );
}
}
//export default App;
