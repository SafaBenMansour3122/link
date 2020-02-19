import React from 'react';
// import './App.css';
import Photo from './photo.jpg'

class App extends React.Component {
  render(){
    this.Data={
      photo:Photo,
      Name:{firstName:"Safa", lastName:"Ben Mansour"},
      profileLinkFb:"https://facebook.com",
      profileLinkedIn:"http://linkedin.com"
    }
  
  return (
     <div>
      <img src={this.Data.photo}/>

<button onClick={()=>{window.location=this.Data.profileLinkFb}}>My Facebook</button>
<button onClick={()=>{window.location=this.Data.profileLinkedIn}}>My LinkedIn</button>


     </div>
  );
}
}

export default App;
