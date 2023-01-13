import React from "react"
import ThePage from "./componse/ThePage";

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {apiResponse: }
//   }

//   callAPI(){
//     fetch("http://localhost:9000/testAPI")
//     .then(res => res.text())
//     .then(res => this.setState({apiResponse: res}))
//   }

//   componentWillMount(){
//     this.callAPI();
//   }

// render(){
{/* {this.state.apiResponse} */ }


function App() {

  return (
    <section className="projectSection">
      <ThePage /> 
    </section>
  );
}


export default App;