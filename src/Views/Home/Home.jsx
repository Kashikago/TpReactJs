import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Home.css"
function Home(){
    return (<>
    <h1>GIF SEARCHER</h1>
    <div className="selectionZone">
        <form method="Get" action="/TenorMode"> <input className="selectionButton" type="submit" value="Tenor Search" />
        </form>
        <form method="Get" action="/GiphyMode"> <input className="selectionButton" type="submit" value="Giphy Search" />
        </form>
    </div>
    </>
    );
}
export default Home;