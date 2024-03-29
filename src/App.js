import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Footer} from './components/Footer'
import { Navbar } from './components/Navbar'
import { FetchData } from './components/FetchData.jsx'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Disclaimer } from './pages/Disclaimer'
import { Privacy } from './pages/Privacy'
import { Term } from './pages/Term'
import './App.css'
import { PostButton } from './components/PostButton'
import { PostNews } from './pages/PostNews'
import TopUp from './utilities/TopUp'
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <TopUp/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/science' element={<FetchData  cat="science" />} />
          <Route path='/technology' element={<FetchData  cat="technology" />} />
          <Route path='/business' element={<FetchData  cat="business" />} />
          <Route path='/health' element={<FetchData  cat="health" />} />
          <Route path='/entertainment' element={<FetchData  cat="entertainment" />} />
          <Route path='/sports' element={<FetchData  cat="sports" />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Term />} />
          <Route path='/post' element={<PostNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
