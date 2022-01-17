import React, {useState} from 'react';
import './App.css';

class App extends React.Component {

  getData() {
    let data = localStorage.getItem('myData');
    data = JSON.parse(data);
    console.log(data)
  }

  constructor(props){
    super(props)
    this.state = { num1: '', num2: '', total: '' }
  }

  exe1(){
    this.setState({ total: parseInt(this.state.num1) + parseInt(this.state.num2) })

    const d = new Date();
    let text = d.toString();
  
    let obj = {data: parseInt(this.state.num1) + parseInt(this.state.num2), key: text}
    localStorage.setItem('myData', JSON.stringify(obj));
  }

  render() {    
    return (
      <div className="App">
        <h1>ADD NUMS</h1>
        <input type="text" className="inputStyle" value={this.state.num1} onChange={ (eve) => { this.setState({ num1: eve.target.value }) } }/>
        <br/><br/>

        <input type="text" className="inputStyle" value={this.state.num2} onChange={ (eve) => { this.setState({ num2: eve.target.value })} } />
        <br/><br/>


        <div className = "buts">
        <button onClick={()=>{this.exe1()}} >Add Numbers</button>
        </div>

        <button onClick= { ()=> this.getData() }>Display data in Storage</button>

        <br/><br/>

        <input type="text" className="outStyle" value={this.state.total} />

      </div>


    );
  }
  
}
  

export default App;