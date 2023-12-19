import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './route/App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './route/Home.jsx'
import Bag from './route/Bag.jsx'
import { Provider } from 'react-redux';
import myntraStore from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path='/' element={<Home/>}/>
            <Route path='/bag' element={<Bag/>}/>
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)
