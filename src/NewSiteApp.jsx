import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { FetchData } from './components/FetchData.jsx'
import { Home } from './pages/Home'

const NewSiteApp = () => {
  // const Layout = () => {
  //   return (
  //     <>
  //       <Navbar />
  //       <Outlet />
  //       <Footer />
  //     </>
  //   )
  // }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/science' element={<FetchData cat="science" />} />
          <Route path='/technology' element={<FetchData cat="technology" />} />
          <Route path='/business' element={<FetchData cat="business" />} />
          <Route path='/health' element={<FetchData cat="health" />} />
          <Route path='/entertainment' element={<FetchData cat="entertainment" />} />
          <Route path='/sports' element={<FetchData cat="sports" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default NewSiteApp;