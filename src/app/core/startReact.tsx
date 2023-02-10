import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/index.css'
import Router from '../components/router'

export default function startReact(){
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    )
    root.render(
        <React.StrictMode>
            <Router/>
        </React.StrictMode>
    )    
}