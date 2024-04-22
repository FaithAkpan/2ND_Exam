import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// ReactDOM.render((
//   <BrowserRouter>
//     <App /> {/* The various pages will be displayed by the `Main` component. */}
//   </BrowserRouter>
//   ), document.getElementById('root')
// );