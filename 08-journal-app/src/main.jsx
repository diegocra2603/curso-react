import React from 'react'
import ReactDOM from 'react-dom/client'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <JournalApp />
    </BrowserRouter>
  </React.StrictMode>,
)
