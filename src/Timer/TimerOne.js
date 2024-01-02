// import React from "react";
import React from "react";

export default class Timer extends React.Component{
    //Mounting phase
    constructor(){
        super();
        
        this.state ={
            count: 0
        }
        console.log("TimerOne constructor")


    }

    //Mounting phase----Updating phase
    static getDerivedStateFromProps(){
        console.log("TimerOne getDerivedStateFromProps")
        return null
    }

    //Updating Phase
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    handleIncrease = () =>{
        this.setState((prevState) =>{
            return {count: prevState.count+1}
        })
    }

    //Updating Phase also Mounting Phase
    render(){
        console.log("TimerOne render")
        return(
            <>
            <h1>Counter</h1>
            <h2>{this.state.count}</h2>
            <button onClick ={this.handleIncrease}>Increase</button>
            </>
        )
    }

    //Mounting Phase
    componentDidMount(){
        console.log("TimerOne componentDidMount")
        console.log("----------------------------")
    }

    //Updating Phase
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("TimerOne getSnapshotBeforeUpdate");
        return null;
    }

    //Updating Phase
    componentDidUpdate(){
        console.log("TimerOne componentDidUpdate")
        console.log("----------------------------")
    }
}