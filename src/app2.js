import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//Stateless component
class App extends React.Component {
  constructor (props) {
    super(props)//this에 접근하기 위해 (상위 컴포넌트 props에 점근하기 위해)
    this.state = {
      counter: 0,
      className:"App-header-2"
    }//상태가 있는 컴포너트
    // this.add=this.add.bind(this);
    // this.minus=this.minus.bind(this);
    Object.keys(this).forEach(key => {
      if(typeof this[key]==='function'){
        this[key]=this[key].bind(this)
      }
    })
  }
  componentDidMount(){
    setInterval(()=>this.setState({
      counter: this.state.counter + 1
    }),1000)
  }  
  calc(val){
    console.log(this);
    this.setState({counter:this.state.counter +val})
  }
  // add(val){
  //   this.setState({counter:this.state.counter +val})
  // }
  // minus(val1){
  //   this.setState({counter:this.state.counter -val1})
  // }
  render(){
    return (
      <div className="App">
        <button onClick={this.calc.bind(this)}>+</button>{this.state.counter}
        <button onClick={() => this.calc(-50)}>-</button>
      </div>
    );
  }
}
export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.add = this.add.bind(this);
    
    Object.getOwnPropertyNames(App.prototype).forEach(key => this[key] = this[key].bind(this))
  }
  state = {}
   async getYoutubeData(query='travel') {
    const data =await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA&q=${query}&part=snippet&pageToken=CAoQAA`);
    this.setState({ data },()=>{
      console.log(data)
    })
  }
  add () {
    this.setState({name : 'hi'}, () => {
      console.log(this.state.name) //1
    })
    console.log(this.state.name) //2
  }
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={this.add} />
        {this.state.name}<button onClick={this.add}>aa</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}
export default App;