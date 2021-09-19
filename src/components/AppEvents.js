import React from "react";

//Countdown component with state, logic & reset button
export default class CountDown extends React.Component {
   constructor(props) {
      super(props);
      this.state = {counter: props.startAt};

      this.resetCount = this.resetCount.bind(this);
   }

   componentDidMount() {
      this.interval = setInterval(() => {
         this.setState(prevState => ({counter: prevState.counter - 1}));

         if(this.state.counter <= 0) {
            this.interval = clearInterval(this.interval)
         }
      }, 1000)
   }

   componentWillUnmount() {
      if(this.interval) {
         clearInterval(this.interval)
      }
   } 

   resetCount() {
      this.setState((prevState, props) => ({counter: props.startAt}))
   }

   render() {
      return (
         <div>
            <p>Component CountDown -&gt; started @ {this.props.startAt}
               , current value {this.state.counter} 
               <a onClick={this.resetCount}> 🔙</a>
            </p>
         </div>
      )
   }
};
