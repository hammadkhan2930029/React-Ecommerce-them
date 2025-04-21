import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './Routes/routes'
import './App.css'
// import './index.css'
function App() {

  return (
   
  

    <Routes>
      {appRoutes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  )
}

export default App;
