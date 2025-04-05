import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Day1 from './Day1.jsx'
// import Day2 from './Day2.jsx'
import Day3 from './Day3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Day1 /> */}
    {/* <Day2 /> */}
    <Day3 />
  </StrictMode>,
)
