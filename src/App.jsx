import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './Routes/routes';
import { Loader } from './components/loader/loader';
import './App.css'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., API call or delay)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds loader

    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (loading) {
    return <Loader />; // Show spinner
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
