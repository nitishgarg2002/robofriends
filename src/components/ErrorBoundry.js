import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
         this.state = {
             hasErorr:false
         }
    }
    componentDidCatch(error,info) {
        this.setState({hasErorr:true})
    }
    render() {
        if(this.state.hasErorr){
            return <h1>error hi error h!!</h1>;
        }
        return this.props.children;
    }
}
export default ErrorBoundry;