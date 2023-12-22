import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
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
    <Route path = "/Home" element= {<Home/>}/>
    <Route path = "/About" element= {<About/>}/>
    <Route path = "/Products" element= {<Products/>}/>
    <Route path = "/Signin" element= {<Signin/>}/>
    <Route path = "/Signup" element= {<Signup/>}/>
    </Routes> 
 <Footer/>
 </BrowserRouter> 
   
    </> 
  )
}


export default App
