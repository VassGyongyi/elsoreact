import "./App.css";
import Kartya from "./component/Kartya";
import {lista} from "./model/adatok"

function App() {
  function kattintas(id){
    console.log("szülőkomponensben",id)
    
  }
  let nev = "Jenő";
  let kor = 12;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Első react projekt</h1>
      </header>
      <article className="row">
       {
        lista.map((elem, index)=>{
          return(
            <Kartya obj={elem} key={index} kattintas={kattintas}/>
          )
        }

        )
       }
         
         
       
      </article>
    </div>
  );
}

export default App;
