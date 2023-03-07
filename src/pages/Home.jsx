import React from 'react'
import { FetchData } from '../components/FetchData'
import { Hero } from '../components/Hero'

export const Home = () => {
  return (
    <>
      <div className="container-fluid" >
      {/* style={{ height: "50vh" }} */}
      </div>
      <FetchData cat="science" />
    </>
  )
}
