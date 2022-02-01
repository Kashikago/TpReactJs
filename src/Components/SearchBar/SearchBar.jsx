import React from "react";
import './SearchBar.css'
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm:""
        }
    }
    render() {
        return (<>
            <div className="searchBarMain">
                <input className="searchBarText" type='text' onChange={this.getText} name='searchTerm' id='searchTerm' placeholder="What gif do you need ?"/>
                <button className ="searchBarButton" type="submit" onClick={()=>{this.props.submitFormCallback(this.state.searchTerm,20,this.props.stateUpdateCallback)}}>Search</button>
            </div>
        </>)

    }
    getText = (event)=> {
        this.setState({
            searchTerm: event.target.value
        })
    }
}



export default SearchBar;