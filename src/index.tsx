import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/variables.css'
import './styles/base.css'
import './styles/components.css'
import './styles/sections.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)