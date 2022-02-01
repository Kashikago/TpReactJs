import react, { useState } from "react";
import GifDisplayer from "../../Components/GifDisplayer/GifDisplayer";
import SearchBar from "../../Components/SearchBar/SearchBar";
const axios = require('axios');
function TenorMode() {
    const [gifResult,SetGifResult] = useState([]);
    return (<>
        <h1>Tenor Search</h1>
        <form method="Get" action="/"> <input type="submit" value="Back" />
        </form>
        <SearchBar submitFormCallback = {getData} stateUpdateCallback = {SetGifResult} />
        <GifDisplayer gifsToDisplay = {gifResult}/>
    </>
    );
}

function getData(searchTerm, limit,callback) {
    const apiKey = '86ZVM52OKNHY';
    const searchUrl = `https://g.tenor.com/v1/search?q=${searchTerm}&key=${apiKey}&limit=${limit}`;
    axios.get(searchUrl).then(res => {
        callback(extractGifsFromRequest(res));
    })
}

function extractGifsFromRequest(requestResult){
    const data = requestResult.data.results;
    let gifs =[];
    for(let i = 0; i < data.length;i++){
        gifs.push(data[i].media[0].tinygif.url);
    }
    return gifs;
    
}
export default TenorMode;