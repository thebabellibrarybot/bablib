
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
import UserSpine from './pgcomponents/userDashComponents/userspine';
import MyProfile from './components/userDashComs/myProfile';

import RequireAuth from './components/requireAuth';
import PresistLogin from './components/PresistLogin';
// THIS IS STILL UNDER CONSTRUCTION    import UserModel from './components/userDashComs/myModel';
// THIS IS STILL UNDER CONSTRUCIION    import UserTombs from './components/userDashComs/userTombs';
// THIS IS STILL UNDER CONSTRUCTION    import UserBlogs from './components/userDashComs/UserBlogs';
import UserProfile from './components/userDashComs/UserProfile';
import UnderConstruction from './pgcomponents/userDashComponents/underConstruction';

// items for global context hooks
import UserStateProvider from './context/UserStateProvider';

import { Route, Routes} from  'react-router-dom';

 /* const ROLES = {
    'User': 2001,
    'Editor': 1984
  }
  */

  function App() {

  return (
  
      <div className='app'>
        <UserStateProvider>
        <Navbar />
        <MyProfile />

        <div className='content'>
          
          {/* public app functions */}

          <Routes>

          {/* open paths */}
            <Route element = { <PresistLogin /> }>

            <Route path = "/" element = {<Home/>}/>
            <Route path = "/babeltombs/" element = {<BabelTombs/>}/>
            <Route path = "/babeltombs/:id" element = { <BabelID/> }/>
            <Route path = "/babeltombs/:id/:type" element = { <BabelMicrofilm/> }/>
            <Route path = "/babelusers" element = { <BabelUsers /> } />   
            <Route path = "/register" element = { <BabelReg/>} />
            <Route path = "/babelblogls" element = { <BabelBlogls/>}/>        
            <Route path = "/babelblogls/:id" element = { <BabelBlogDeets/> }/>

          {/* user app functions */}

            
            <Route element = { <RequireAuth allowedRoles={[2001, 1984]}/> }>
              <Route path = "/userspine" element = {<UserSpine/>}/>
              <Route path = "/userspine/mymodels" element = {<UnderConstruction/>}/>
              <Route path = "/userspine/mytombs" element = {<UnderConstruction/>}/>
              <Route path = "/userspine/myprofile" element = {<UserProfile/>}/>
              <Route path = "/userspine/myblogs" element = {<UnderConstruction/>}/>
            </Route>
            
            </Route>
         

          {/* admin app functions */}
          


          </Routes>
        

          {/* admin app functions */}





          

        </div>
        </UserStateProvider>
      </div>
    
    );
}


export default App;
/*

*/
