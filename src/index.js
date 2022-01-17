import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import './index.css';
import Fader from './components/Fader.js'

//import goku from "./goku.jpeg";
//return <p>&#128512;</p>;


function App() {
    const [number1, setNumber1] = useState(null);
    const [number2, setNumber2] = useState(null);
    const [number3, setNumber3] = useState(null);

    const [total, setTotal] = useState(null);

    function Table() {
        return (
        <table className="t_format">
        <tr>
            <th>Emoji</th>
            <th>Sum Range</th>
        </tr>
        <tr>
            <td>&#128512;</td>
            <td>10 or less</td>
        </tr>
    
        <tr>
            <td>&#128513;</td>
            <td>10-39</td>
        </tr>
    
        <tr>
            <td>&#128514;</td>
            <td>40-69</td>
        </tr>
    
        <tr>
            <td>&#128515;</td>
            <td>70-99</td>
        </tr>
    
        <tr>
            <td>&#128516;</td>
            <td>100+</td>
        </tr>
        
        </table>
        )
    }

    function Emoji_pick() {
        let emoji;
        if(total == null) {
            emoji = <h1></h1>
        }
        else if(total <= 10) {
            emoji = <h1>&#128512;</h1>
        }
        else if(total <= 39) {
            emoji = <h1>&#128513;</h1>
        }
        else if(total <= 69) {
            emoji = <h1>&#128514;</h1>
        }
        else if(total <= 99) {
            emoji = <h1>&#128515;</h1>
        }
        else {
            emoji = <h1>&#128516;</h1>
        }
        return (
            <div>
                <Fader text={emoji}></Fader>
            </div>
        )
    }
    
    function calculateTotal() {
        setTotal(number1 + number2 + number3);
        //Emoji_pick();
        
    }

    return (
      <div className="App">
        <Table/>

        <h1>Adding Numbers</h1>
        
        <div className="number-inputs">
        
          <input
            type="number"
            value={number1}
            onChange={(e) => setNumber1(+e.target.value)}
            placeholder="0"
          />
          
          <input 
            type="number"
            value={number2}
            onChange={(e) => setNumber2(+e.target.value)}
            placeholder="0"
          />
          
          <input 
            type="number"
            value={number3}
            onChange={(e) => setNumber3(+e.target.value)}
            placeholder="0"
          />
        </div>
  
        <button onClick={calculateTotal}>SUM</button>
        <Emoji_pick />


        


           


      </div>
      
    );
  }
//<Emoji_pick />    

ReactDOM.render(<App />, document.getElementById("root"));
  