
import React /*{ Component }*/ from 'react'
import Navbar from './navbar';
import Home from './components/home';
//import MyProfile from './components/userDashComps/myProfile';

import BabelTombs from './pgcomponents/babelTombs';
import BabelID from './pgcomponents/babelTombDetail'
import BabelMicrofilm from './pgcomponents/babelMicrofilm';
import BabelBlogls from './pgcomponents/babelBlogs';
import BabelBlogDeets from './pgcomponents/babelBlogDetails';

import BabelUsers from './pgcomponents/babelUsers';
import BabelReg from './pgcomponents/babelRegister';
import UserSpine from './pgcomponents/userspine';
import MyProfile from './components/userDashComs/myProfile';

import RequireAuth from './components/requireAuth';
import PresistLogin from './components/PresistLogin';
import UserModel from './components/userDashComs/myModel';

import { Route, Routes} from  'react-router-dom';

 /* const ROLES = {
    'User': 2001,
    'Editor': 1984
  }
  */

  function App() {

  return (
  
      <div className='app'>
        <Navbar />
        <MyProfile />

        <div className='content'>
          
          {/* public app functions */}

          <Routes>

          {/* open paths */}

            <Route path = "/" element = {<Home/>}/>
            <Route path = "/babeltombs/" element = {<BabelTombs/>}/>
            <Route path = "/babeltombs/:id" element = { <BabelID/> }/>
            <Route path = "/babeltombs/:id/:type" element = { <BabelMicrofilm/> }/>
            <Route path = "/babelusers" element = { <BabelUsers /> } />   
            <Route path = "/register" element = { <BabelReg/>} />
            <Route path = "/babelblogls" element = { <BabelBlogls/>}/>        
            <Route path = "/babelblogls/:id" element = { <BabelBlogDeets/> }/>

          {/* user app functions */}

            <Route element = { <PresistLogin /> }>
            <Route element = { <RequireAuth allowedRoles={[2001, 1984]}/> }>
              <Route path = "/userspine" element = {<UserSpine/>}/>
              <Route path = "/userspine/mymodels" element = {<UserModel/>}/>
            </Route>
            </Route>
         

          {/* admin app functions */}
          


          </Routes>
        

          {/* admin app functions */}





          

        </div>
      </div>
    
    );
}


export default App;
/*

*/
