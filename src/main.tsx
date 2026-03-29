import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GitsApp } from './GitsApp'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GitsApp></GitsApp>
  </StrictMode>,
)
