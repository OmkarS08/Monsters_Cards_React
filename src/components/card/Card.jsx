// import { Component } from "react";
import "./card.css";

function Card(props)
{
    const {email ,id, name }=props.monster;   
    return(
        <div>         
            <div className="card-container" key ={id}>
                <img alt={`monsters ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} key ={id}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )    
}



export default Card;

// class Card extends Component{
//         render()
//         {
//             const {email ,id, name }=this.props.monster;   
//             return(
//                 <div>         
//                    <div className="card-container" key ={id}>
//                         <img alt={`monsters ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} key ={id}/>
//                         <h2>{name}</h2>
//                         <p>{email}</p>
//                     </div>
//                 </div>
//             )
//         }
    
//     }
    