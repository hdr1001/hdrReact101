import React from "react";

//Function component, no state & no logic
function State00(props) {
   return (
      <div>
         <p>Component State00 -&gt; started @ {props.startAt}, current value {props.counter}</p>
      </div>
   )
}

//Class component, no state & no logic
class State01 extends React.Component {
   render() {
      return (
         <div>
            <p>Component State01 -&gt; started @ {this.props.startAt}, current value {this.props.counter}</p>
         </div>
      )
   }
}

//Class component with state but no logic
class State02 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {counter: props.startAt}
   }

   render() {
      return (
         <div>
            <p>Component State02 -&gt; started @ {this.props.startAt}, current value {this.state.counter}</p>
         </div>
      )
   }
}

//Class component with state and (internal) logic
class State03 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {counter: props.startAt};
   }

   componentDidMount() {
      this.interval = setInterval(() => {
//         this.setState({counter: this.state.counter - 1});
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

   render() {
      return (
         <div>
            <p>Component State03 -&gt; started @ {this.props.startAt}, current value {this.state.counter}</p>
         </div>
      )
   }
}

//Component composition
class StateXX extends React.Component {
   render() {
      return (
         <>
            <State02 startAt={5} />
            <State03 startAt={15} />
         </>
      )
   }
}

export {
   State00,
   State01,
   StateXX
};
