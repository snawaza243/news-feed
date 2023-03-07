import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Hero } from './Hero';

export const FetchData = ({ cat }) => {
  const [data, setData] = useState("");


  function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  const items = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];
  console.log(random_item(items));

  const fetchData = async () => {
    await axios
      .get(
        cat ? `https://newsapi.org/v2/top-headlines?country=${random_item(items)}&category=${cat}&apiKey=564424204fdc497b997d68e957fbaff0`
          : "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=564424204fdc497b997d68e957fbaff0")
      .then((res) => setData(res.data.articles));

  };
  ;

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <>
      <Hero cat={cat} />
      <div className='container my-4'>
        <div className='container my-2 d-flex justify-content-center align-items-center flex-column my-3' style={{ minHeight: "100vh" }}>
          {data ? data.map((item, index) => (
            <>

              <div className="container my-3 p-3" style={{ width: "600px", boxShadow: "2px 2px 20px silver", borderRadius: "10px" }}>
                <h5 className='my-1'>{item.title}</h5>
                <div className='d-flex justify-content-center align-items-center flex-column my-3'>
                  <img src={item.urlToImage} alt="Image not found" className='img-fluid ' style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                </div>
                <p className='my-1'> {item.content} </p>
                <a href={item.url} target="_blank" >View More</a>
              </div>
            </>
          )) : "Loading..."}
        </div>
      </div>
    </>
  )
}