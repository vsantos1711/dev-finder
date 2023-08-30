import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Alert } from './components/Alert'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Alert />
  </React.StrictMode>,
)
