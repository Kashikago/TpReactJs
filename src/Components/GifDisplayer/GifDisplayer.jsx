import React from "react";
import './GifDisplayer.css';
function GifDisplayer(props){
    const displayedGif = []
    {props.gifsToDisplay.forEach(element => {
            displayedGif.push(<img src = {element} key={element} />);
    })}
    return(<>
    <div className="displayGif">
       {displayedGif}
    </div>
    </>)
}

export default GifDisplayer;