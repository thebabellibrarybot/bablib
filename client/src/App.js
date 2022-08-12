
import React from 'react'
import Navbar from './navbar';
import Home from './components/home';
import BabelAbout from './components/about';
import BabelTools from './components/babeltools';
import AboutForusers from './pgcomponents/aboutforusers.js';
//import ToolsLearn from './pgcomponents/learn';
import AboutHistory from './pgcomponents/history';
import BabelTombs from './pgcomponents/babelTombs';
import CreatebabelTombs from './components/createBabelTombs';
import BabelID from './pgcomponents/babelTombDetail'
import BabelMicrofilm from './pgcomponents/babelMicrofilm';
import BabelTranslate from './pgcomponents/babelTranslate';
import BabelTranscript from './pgcomponents/babelTranscript';
import BabelBlogls from './pgcomponents/babelBlogs';
import BabelBlogDeets from './pgcomponents/babelBlogDetails';
import { BrowserRouter as Router, Route, Routes} from  'react-router-dom';


function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='content'>
          
          <Routes>
            <Route path = "/" element = {<Home/>}/>
          </Routes>

          <Routes>
            <Route path = "/babeltools" element = {<BabelTools/>}/>
          </Routes>

          <Routes>
            <Route path = "/babeltools/tools" element = { <BabelTools/> }/>
          </Routes>

          <Routes>
            <Route path = "/babeltombs/" element = {<BabelTombs/>}/>
          </Routes>

          <Routes>
            <Route path = "/babeltombs/home" element = { <Home/> }/>
          </Routes>

          <Routes>
            <Route path = "/about" element = { <BabelAbout/> }/>
          </Routes>

          <Routes>
            <Route path = "/about/history" element = { <AboutHistory/> }/>
          </Routes>

          <Routes>
            <Route path = "/about/forusers" element = { <AboutForusers/> }/>
          </Routes>

          <Routes>
            <Route path = "/babelblogls" element = { <BabelBlogls/>}/>
          </Routes>

          <Routes>
            <Route path = "/babelblogls/:id" element = { <BabelBlogDeets/> }/>
          </Routes>

          <Routes>
            <Route path = "/babeltombs/create" element = {<CreatebabelTombs/>}/>
          </Routes>

          <Routes>
            <Route path = "/babeltombs/:id" element = { <BabelID/> }/>
          </Routes>

          <Routes>
            <Route path = "/babeltombs/:id/:type" element = { <BabelMicrofilm/> }/>
          </Routes>

          <Routes>
            <Route path = "/babeltombs/:id/translate" element = { <BabelTranslate/> }/>
          </Routes>

          <Routes>
            <Route path = "/babeltombs/:id/transcript" element = { <BabelTranscript/> }/>
          </Routes>


          

        </div>
      </div>
    </Router>
    );
}

export default App;
