import axios from 'axios'
import React, { useEffect, useState, useTransition } from 'react'
import { Hero } from './Hero';
export const FetchData = ({ cat, count }) => {
  const [data, setData] = useState("");


  // function random_item(items) {
  //   return items[Math.floor(Math.random() * items.length)];
  // }
  // const items = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];
  // console.log(random_item(items));

  // var e = document.getElementById("countryForId");
  // var value = e.value;
  // var countryCodeUpper = e.options[e.selectedIndex].text;
  // var countryCodeLower = countryCodeUpper.text.toLowerCase();
  //   function getOption() {
  //     var selectElement = document.querySelector('#countryForId');
  //     var output = selectElement.value;
  //     var outputLower = output.toLowerCase()
  //     console.log(outputLower)
  //     return outputLower;
  //     // document.querySelector('.output').textContent = output;
  // }

  const fetchData = async () => {
    await axios
      .get(
        cat ? `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=458f6c5923494b5ba42d89fb15e72255`
          : "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=458f6c5923494b5ba42d89fb15e72255")
      .then((res) => setData(res.data.articles));

  };
  ;

  useEffect(() => {
    fetchData();
  }, [cat, count]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var postCat = capitalizeFirstLetter(cat)
  document.title = cat ? postCat : document.getElementsByClassName("pageText");

  const [hTitle, setHTitle] = useState("");

  const fetchData2 = async () => {
    await axios
      .get("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=458f6c5923494b5ba42d89fb15e72255")
      .then((res) => setHTitle(res.hTitle.articles + " "));

  };
  ;

  useEffect(() => {
    fetchData2();
  }, []);


  return (
    <>
      <div>
        <Hero cat={cat} title=" " i="2" />
      </div>
      <div className='container my-4 ' >
        <div className='container my-2 d-flex justify-content-center align-items-center flex-column my-3' style={{ minHeight: "100vh" }}>
          {data ? data.map((item, index) => (
            <>
              <div className="container my-3 p-3" style={{ width: "600px", boxShadow: "2px 2px 20px silver", borderRadius: "10px" }}>
                <h5 className='my-1 postHeadStyle' >{item.title}</h5>
                <div className='d-flex justify-content-center align-items-center flex-column my-3'>
                  <img src={item.urlToImage} alt="Image not found" className='img-fluid ' style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                </div>
                <p className='my-1'> {item.content} </p>
<div className='mt-3'>
<a href={item.url} target="_blank" className='postViewMoreStyle mt-1' >View More</a>

</div>
              </div>
            </>
          )) : "Loading..."}
        </div>
      </div>
      
    </>
  )
}