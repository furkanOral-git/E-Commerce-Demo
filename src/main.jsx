import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.scss"
import { worker } from './mockApi/browser.js'

if (process.env.NODE_ENV === 'development') {
  
  worker.resetHandlers()
  worker.start()
}

ReactDOM.createRoot(document.getElementById('App__Root')).render(
  <>
    <App />
  </>
)
