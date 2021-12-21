import { Component } from "react";

class ErrorBoundary extends Component { 
    constructor(){
        super();
        this.state = {hasError: false};
    }
    //error argument automatski prenet(ovo dole)
  componentDidCatch(error) {
      this.setState({hasError: true});
  } //will be trigered when child component trigers error, ponasa se kao wrapper za childove
  render() {
      if(this.state.hasError === true){
return <p> ERROR OCCURED</p>
      }
    return this.props.children;
  }
}

export default ErrorBoundary;
