// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from '../components/navbar.js'

let navbar_div_j = document.getElementById("navbar_div");
navbar_div_j.innerHTML = navbar();


import {section_i} from '../components/section_i.js'
let section_i_div_j = document.getElementById("container");
section_i_div_j.innerHTML = section_i();


import {fetchCNews} from '../components/fetch.js'
fetchCNews();


import {SearchNews} from '../components/fetch.js'

import {appendCNews} from '../components/fetch.js'



document.getElementById('search_input').addEventListener("keydown", Presskey);

function Presskey(e){
    if(e.key =="Enter"){
        SearchNews();
    }
}
















