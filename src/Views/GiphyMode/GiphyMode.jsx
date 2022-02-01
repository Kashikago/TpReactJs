import react, { useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import GifDisplayer from "../../Components/GifDisplayer/GifDisplayer";

const axios = require('axios');
function GiphyMode() {
    const [gifResult, SetGifResult] = useState([]);
    return (<>
        <h1>Giphy Search</h1>
        <form method="Get" action="/"> <input type="submit" value="Back" />
        </form>
        <SearchBar submitFormCallback={getData} stateUpdateCallback={SetGifResult} />
        <GifDisplayer gifsToDisplay={gifResult} />
    </>

    );
}

function getData(searchTerm, limit, callback) {
    const apiKey = 'tXy8PGLvQIuS3rrotNUgsbycXQsIt6EY';
    let searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}`
    if (searchTerm == "") {
        searchUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`;
    }

   
    axios.get(searchUrl).then(res => {
        callback(extractGifsFromRequest(res));
    })
}

function extractGifsFromRequest(requestResult) {
    const data = requestResult.data.data;
    let gifs = [];
    for (let i = 0; i < data.length; i++) {
        gifs.push(data[i].images.original.url);
    }
    return gifs;
}
export default GiphyMode;