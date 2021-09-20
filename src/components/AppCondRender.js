import React from 'react';

function CRHeader(props) {
   if(props.active) {
      return <h1>Conditional rendering component</h1>;
   }
   else {
      return <p>Component for conditional rendering is no longer active</p>;
   }
}

export default class CondRender extends React.Component {
   constructor(props) {
      super(props);
      this.state = { counter: props.startAt };

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
            <CRHeader active={this.state.counter} /> 
            <p>Component CondRender -&gt; started @ {this.props.startAt}
               , current value {this.state.counter} 
               {this.state.counter > 0 && <a onClick={this.resetCount}> 🔙</a>}
            </p>
            <p>The component is {this.state.counter ? 'still' : 'no longer'} active</p>
         </div>
      )
   }
};
