

function fetchCNews(){


    let country=document.getElementById("sidebar").children;

    for(let el of country){
        el.addEventListener("click",cSearch)
    }

    function cSearch(){
        SearchNews(this.id)
    
    }
    
    
 async function SearchNews(count){
    const country= count
    try{
       
        const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country }`);
        const data = await res.json();
        appendCNews(data.articles)
    }
    catch(err){
        console.log("error")

    }
}


let results_div= document.getElementById("results");

 function appendCNews(data){

    results_div.innerHTML= null;

  data.forEach(function (elem){

    // console.log(elem.urlToImage)
    let box = document.createElement("div");
    box.setAttribute("class","news")

    let inner_box1 = document.createElement("div");
    inner_box1.setAttribute("id","ibox1")

    let inner_box2 = document.createElement("div");
    inner_box2.setAttribute("id","ibox2")

    


    let img = document.createElement("img");
    img.setAttribute("id","headimg");
    img.src= elem.urlToImage;

    let head = document.createElement("h2");
    head.setAttribute("id","news_head")
    head.innerText = elem.title;

    let para = document.createElement("p"); 
    para.setAttribute("id","dis")
    para.innerText = elem.description;

    inner_box1.append(img);
    inner_box2.append(head,para)

    box.append(inner_box1,inner_box2);

   
    results_div.append(box);

  })

 }   

}



async function SearchNews(){
    try{
       
        const query= document.getElementById("search_input").value;

        const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query} `);
        const data = await res.json();
        appendCNews(data.articles)
    }
    catch(err){
        console.log("error :", err)

    }
}



 function appendCNews(data){
    
let results_div= document.getElementById("results");

    results_div.innerHTML= null;

  data.forEach(function (elem){

    // console.log(elem.urlToImage)
    let box = document.createElement("div");
    box.setAttribute("class","news")

    let inner_box1 = document.createElement("div");
    inner_box1.setAttribute("id","ibox1")

    let inner_box2 = document.createElement("div");
    inner_box2.setAttribute("id","ibox2")

    


    let img = document.createElement("img");
    img.setAttribute("id","headimg");
    img.src= elem.urlToImage;

    let head = document.createElement("h2");
    head.setAttribute("id","news_head")
    head.innerText = elem.title;

    let para = document.createElement("p"); 
    para.setAttribute("id","dis")
    para.innerText = elem.description;

    inner_box1.append(img);
    inner_box2.append(head,para)

    box.append(inner_box1,inner_box2);

   
    results_div.append(box);

  })

    
 }  









export {fetchCNews,  SearchNews, appendCNews}