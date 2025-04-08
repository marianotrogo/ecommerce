
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        {/*User Layout */} 
        </Route>
        <Route>{/*Admin Layout */}  </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App