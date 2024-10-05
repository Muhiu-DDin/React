import { Allbooks } from './pages/allBooks'
import Header from './pages/header'
import { Footer } from './pages/footer'
import AuthenticationBlock from './pages/auth'
import { Contact } from './pages/contact'
import { About } from './pages/about'
import {Signin} from "./pages/signin"
import { BookDetail } from './pages/bookDetail'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import UserContextProvider from './context/userContext'
import { useEffect } from 'react'
import { themeContext } from './context/themeContext'
import { useContext } from 'react'


function App() {
const {theme} = useContext(themeContext)

useEffect(
()=>{
document.querySelector('html').classList.remove("dark" , "light");
document.querySelector('html').classList.add(theme);
}
, [theme])


  return (
    <UserContextProvider>
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path="/" element={<Allbooks/>}/>
      <Route path=":title" element={<BookDetail/>}/>
      <Route path="/auth">
        <Route index element={<AuthenticationBlock/>}/>
        <Route path="signin" element={<Signin/>}/>
      </Route>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
