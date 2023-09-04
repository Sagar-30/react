import React from 'react'
import ReactDOM from 'react-dom/client'
//import Navbar from './components/headercomponent.jsx'
import './index.css'
//import Main from './components/mainpagecomponent.jsx'
import Mainpagecomponent from './components/mainpagecomponent.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Mainpagecomponent />
  </React.StrictMode>
)
// ReactDOM.createRoot(document.getElementById('home')).render(
//     <React.StrictMode>
//         <Main />
//         </React.StrictMode>
// )