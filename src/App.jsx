import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About'
import Products from './pages/Products'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Footer from './components/Footer'
import ForgetPassword from './components/ForgetPassword'
import Admin from './components/AdminPannel'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
<BrowserRouter>
 <Navbar/>
    <Routes>
    <Route path = "/" element= {<Home/>}/>
    <Route path = "/about" element= {<About/>}/>
    <Route path = "/products" element= {<Products/>}/>
    <Route path = "/signin" element= {<Signin/>}/>
    <Route path = "/signup" element= {<Signup/>}/>
    <Route path="/admin" element={<Admin/>}></Route>
    <Route path="/forgetPassword" element={<ForgetPassword/>}></Route>
    </Routes> 
 <Footer/>
 </BrowserRouter> 
   
    </> 
  )
}


export default App
