//import { Component } from "react";
import './searchBox.css';

function SearchBox(props)
{
    return(
        <input
        className={`search-box ${props.class}`}
        type="search"
        placeholder={props.placeholder}
        onChange={props.eventHandler}/>
    )    
}


export default SearchBox;


// class SearchBox extends Component{
//     render()
//     {
//         return(
//             <input
//             className={`search-box ${this.props.class}`}
//             type="search"
//             placeholder={this.props.placeholder}
//             onChange={this.props.eventHandler}/>
//         )
//     }
// }