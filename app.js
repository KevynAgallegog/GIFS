const url = "https://api.giphy.com/v1/gifs/search";
const key = "&api_key=LFbuRCn1Uo6KEX69wOVNG6yrTx4OzuMY";
const limit = "&limit=30";
let search = "?q=";
let q = "";

let urlComp = "";

urlComp = url + search + q + key + limit;

const btn = document.getElementById('btn');
btn.onclick = () => {
    document.getElementById('container_Search').innerHTML = "";
    document.getElementById('h1').innerHTML="";
    q = document.getElementById('text').value;
    urlComp = url + search + q + key + limit;
    getDataSearch();
}

const btnTrending = document.getElementById('trending');
btnTrending.onclick = () => {
    document.getElementById('container_Search').innerHTML = "";
    getData(); 
}

const getDataSearch = async () => {
    await fetch(urlComp)
        .then((response) => response.json())
        .then((giphy) => {
            console.log(giphy);

            for (let index = 0; index < giphy.data.length; index++) {
                const gif = document.createElement('img');

                gif.src = giphy.data[index].images["original"].url;
                gif.className = "gifs_search";
                document.getElementById("container_Search").appendChild(gif);
            }
        })
        .catch((error) => {
            console.error('Error fetching gifs:', error);
        });
}

const trending = "https://api.giphy.com/v1/gifs/trending?api_key=LFbuRCn1Uo6KEX69wOVNG6yrTx4OzuMY&limit=30";

const getData = async () => {
    await fetch(trending)
        .then((response) => response.json())
        .then((giphy) => {
            console.log(giphy);

            for (let index = 0; index < giphy.data.length; index++) {
                const gif = document.createElement('img');

                gif.src = giphy.data[index].images["original"].url;
                gif.className = "gifs_trending";
                document.getElementById("container_Search").appendChild(gif);
            }
        })
        .catch((error) => {
            console.error('Error fetching:', error);
        });
}

getData();