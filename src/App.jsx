import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About'
import Products from './components/Products'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
<BrowserRouter>
 <Header/>
    <Routes>
    <Route path = "/" element= {<Home/>}/>
    <Route path = "/about" element= {<About/>}/>
    <Route path = "/products" element= {<Products/>}/>
    <Route path = "/signin" element= {<Signin/>}/>
    <Route path = "/signup" element= {<Signup/>}/>
    </Routes> 
 <Footer/>
 </BrowserRouter> 
   
    </> 
  )
}


export default App
