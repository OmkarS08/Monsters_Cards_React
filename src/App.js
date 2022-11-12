import { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchString:''
    }
    console.log("constructor");
  }
  componentDidMount(){
    console.log("componentDidMount")
    fetch('https://jsonplaceholder.typicode.com/users#')
    .then(responce => responce.json())
    .then(user => this.setState(()=> 
    {return {monsters:user};},
    () =>{ console.log(this.state) }
     ));}
   
   onSearchChange =(event)=> {
    const searchString = event.target.value.toLocaleLowerCase();
      this.setState(()=> {
        return {searchString};
      })}  
  render()

  {
    console.log("render")

      const {monsters , searchString }= this.state;
      const {onSearchChange}=this;
    const filterMonsters = monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchString); // include return boolean output
      })

    return (
      <div className="App">
      <h1 className='App-tittle'>MonterSPedia</h1>
      <SearchBox eventHandler ={onSearchChange} placeholder ='Search Monsters' class ='search-box'/>
      <CardList  monsters ={filterMonsters}/>
      </div>
      
    );
  }

}

export default App;
//{filterMonsters.map((monster)=>{return <h1 key={monster.id}>{monster.name}</h1>})};