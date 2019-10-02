import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from'./Components/Footer'
import Man from './Pages/Man';
function App() {
  return (
<BrowserRouter>
      <div className="page">
          
        <Man/>
    
      </div>
    </BrowserRouter>
  );
}

export default App;
