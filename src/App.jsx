import './App.css'
import Landing  from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    {/* Path for Landing (baseURL:http:Localhost:5173/),Home (http:Localhost:5173/home),History (http:Localhost:5173/history)*/}
    {/* Header */}
  <Header/>
    <Routes>
      <Route path='/' element ={<Landing/>} />
      <Route path='/home' element ={<Home/>} />
      <Route path='/history' element ={<History/>} />

    </Routes>
    {/* Footer */}
    <Footer/>
    </>
  )
}

export default App
