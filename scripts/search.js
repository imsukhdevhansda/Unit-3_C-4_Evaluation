// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from '../components/navbar.js'

let navbar_div_j = document.getElementById("navbar_div");
navbar_div_j.innerHTML = navbar();

document.getElementById("search_input").addEventListener("keydown",Presskey)




function Presskey(e){
    if(e.key =="Enter"){
        SearchNews();
    }
}




async function SearchNews(){
 
    try{
       
        const query= document.getElementById("search_input").value;

        const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query} `);
        const data = await res.json();
        console.log(data)
    }
    catch(err){
        console.log("err")

    }
}
