import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './Routes/routes';
import { Loader } from './components/loader/loader';
import './App.css'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (

    <Routes>
      {appRoutes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  )
}

export default App;
