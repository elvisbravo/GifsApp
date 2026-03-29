import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GitsApp } from './GitsApp'

import './index.css'
import { MyCounterApp } from './counter/components/MyCounterApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<GitsApp />*/}
    <MyCounterApp />
  </StrictMode>,
)
