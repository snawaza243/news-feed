// // var textArray = [
// //     'song1.ogg',
// //     'song2.ogg'
// // ];
// // var randomNumber = Math.floor(Math.random()*textArray.length);
// // console.log(randomNumber)
// // // audioElement.setAttribute('src', textArray[randomNumber]);
// const array = [
//         'https://www.t.ly/x7Op',
//         'https://www.t.ly/FyMA', 
//         'https://www.t.ly/TJKR', 
//         'https://www.t.ly/ZtUc',
//         'https://www.t.ly/QPuI',
//         'https://www.t.ly/UkWh',
//         'https://www.t.ly/BBnW'

//     ];
// // const result = getRandomItem(array);

// // console.log(array)

// function random_item(items)
// {
  
// return items[Math.floor(Math.random()*items.length)];
     
// }

// var items = ["a","b","c","f","z"]; 
// console.log(random_item(items));

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  const items = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];
  console.log(random_item(items));