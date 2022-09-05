
import React /*{ Component }*/ from 'react'
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

import UserModel from './components/userDashComps/myModel';

import { BrowserRouter as Router, Route, Routes} from  'react-router-dom';

 /* const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
  }
  */

  function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='content'>
          
          {/* public app functions */}

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
            <Route path = "/babelblogls" element = { <BabelBlogls/>}/>
          </Routes>
          <Routes>
            <Route path = "/babelblogls/:id" element = { <BabelBlogDeets/> }/>
          </Routes>

          {/* user app functions */}

          <Routes>
            <Route path = "/userspine" element = {<UserSpine/>}>
              {/*<Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              </Route>*/}
            </Route>
          </Routes>

          <Routes>
            <Route path = "/userspine/mymodels" element = {<UserModel/>}/>
          </Routes>
        

          {/* admin app functions */}





          

        </div>
      </div>
    </Router>
    );
}


export default App;
/*

*/
