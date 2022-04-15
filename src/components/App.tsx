import React from 'react';
import '../css/App.css';
import Dashboard from './Dashboard'
import UploadFile from './UploadFile';
import NavBar from './NavBar'
import { Route, Routes} from 'react-router-dom'

function App(props: any) {

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='App-body'>
        <Routes>
          <Route path='/dashboard' element={Dashboard()}></Route>
          <Route path='/' element={UploadFile()}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
