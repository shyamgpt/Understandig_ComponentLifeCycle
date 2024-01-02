// import React from "react";
import React from "react";

export default class Timer extends React.Component{
    //Mounting phase
    constructor(){
        super();
        
        this.state ={
            time: 0
        }

        this.timer = null;
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


    //Updating Phase also Mounting Phase
    render(){
        console.log("TimerOne render")
        return(
            <>
            <h1>
                Time spent: {new Date(this.state.time *1000).toISOString().slice(11,19)}
            </h1>
           
            </>
        )
    }

    //Mounting Phase
    componentDidMount(){
        console.log("TimerOne componentDidMount")
        console.log("----------------------------")

        this.timer = setInterval(() =>{
            this.setState((prevState) =>({time: prevState.time+1}))
           
        }, 5000);
    }

    //Updating Phase
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("TimerOne getSnapshotBeforeUpdate");
        return null;
    }

    //Updating Phase
    componentDidUpdate(prevProps,prevState,snapShot){
        //All the parameter inside this fucntion is optional
        console.log("TimerOne componentDidUpdate")
        console.log("----------------------------")
        console.log("Previous Props: ",prevProps);
        console.log("Previous State:", prevState);
        console.log("SnapShot from getSnapshotBrforeUpdate: ", snapShot);

    }

    componentWillUnmount(){
        console.log("TimerOne componentWillUnmount")
        clearInterval(this.timer);
    }
}