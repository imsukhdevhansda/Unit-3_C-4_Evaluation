// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from '../components/navbar.js'

let navbar_div_j = document.getElementById("navbar_div");
navbar_div_j.innerHTML = navbar();


const url = `https://masai-mock-api.herokuapp.com/news?q=tesla `

const url1 = `https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}`




document.querySelectorAll(".country").addEventListener("click",SearchNews);







 async function SearchNews(){
    const country= document.getElementsByClassName("country").innerHTML;
    console.log(country)
    try{
       
       

        const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country }`);
        const data = await res.json();
        console.log(data)
    }
    catch(err){
        console.log("err")

    }
}



