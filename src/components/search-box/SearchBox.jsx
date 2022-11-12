import { Component } from "react";
import './searchBox.css'
class SearchBox extends Component{
    render()
    {
        return(
            <input
            className={`search-box ${this.props.class}`}
            type="search"
            placeholder={this.props.placeholder}
            onChange={this.props.eventHandler}/>
        )
    }
}

export default SearchBox;