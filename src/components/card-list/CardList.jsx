
//import { Component } from "react";
import "./card-list.css"
import Card from "../card/Card";

function CardList(props){
    const {monsters } =props;
         return(        
        <div className="card-list">
         {monsters.map((monster) => {return <Card monster ={monster}  />})}
         </div>
         )

}

export default CardList;

// class CardList extends Component
// { 
//     render()
//     {   
//         const {monsters} =this.props;
//         return(        
//         <div className="card-list">
//         {monsters.map((monster) => {return <Card monster ={monster} />})}
//         </div>
//         )

//     }
// }