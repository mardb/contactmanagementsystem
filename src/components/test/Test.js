import React, { Component } from 'react'



class Test extends Component {
  state={
    title:"",
    body:""
  };

componentDidMount(){
  fetch
  ("http://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => this.setState({

  })
);
}


// componentWillMount(){
//   console.log("component will mount ");
// }

// componentDidUpdate(){
//   console.log("component will mount ");//when changing state
// }

// componentWillReceiveProps(nextProps, nextState){
   
// }

  render() {
    const {title, body} = this.state;
    return (
      <div> 
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;
