import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routers/Router.tsx'
import SideMenu from './components/SideMenu .tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='flex'>
      <SideMenu />
      <Router />
    </main>
  </React.StrictMode>,
)
