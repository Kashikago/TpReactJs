import React from "react";
import './GifDisplayer.css';
function GifDisplayer(props){
    const displayedGif = []
    {props.gifsToDisplay.forEach(element => {
            displayedGif.push(<img src = {element} key={element} />);
    })}
    return(<>
    <div className="displayGif">
        {displayedGif.length > 0 ? displayedGif : "You will see your result here !"}
    </div>
    </>)
}

export default GifDisplayer;