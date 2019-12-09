import React from 'react';
import './App.css';
import axios from 'axios';
import Nav from './Components/Nav/Nav'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={} //초기화 비어있는 객체로 초기화 초기화학지않으면 setState하지못함
    this.add = this.add.bind(this);
    
    Object.getOwnPropertyNames(App.prototype).forEach(
      key => this[key] = this[key].bind(this))//자동으로 바인딩하기위한 함수없었으면 this.getYoutubeData=this.getYoutubeData.bind(this)해야함
  }
  //UPSERT:UPDATE+INSERT
  //getYoutubeData() undefined였을때 여행이 된다.
   async getYoutubeData(query) {
     const params={
       key:'',
       q:query,
       part:'snippet',
       maxResult:10,
       pageToken:'',
     }
     try{
      const {data} =await axios.get('https://www.googleapis.com/youtube/v3/search',{params});
      this.setState({ data })//state에 data가 추가 됨;
     }catch(err){
        //
     }

  }
  render () {
  return (
    <div className="App">
      <Nav>
        <SearchBar />
      </Nav>
      <VideoList
       />


    </div>
  );
  }
}
export default App;