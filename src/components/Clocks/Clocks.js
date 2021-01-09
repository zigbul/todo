import React, {Component} from 'react';
import './Clocks.css';

export default class Clocks extends Component {

   state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      ticking: false,
   };

   componentDidMount() {
      this.timer();
      this.tickings = setInterval(this.timer, 1000);
   }

   componentWillUnmount() {
      clearInterval(this.tickings);
   }

   startClocks = () => {
      this.setState({
         ticking: true,
      });
   };

   stopClocks = () => {
      this.setState({
         ticking: false,
      })
   }

   timer = () => {

      const { ticking, seconds, minutes } = this.state;

      if (ticking && seconds < 60) {
         this.setState({
            seconds: seconds + 1,
         });
      } else if (ticking && minutes < 60) {
         this.setState({
            minutes: minutes + 1,
            seconds: 0,
         });
      } else if (ticking) {
         this.setState({
            minutes
         })
      }
   };

   render() {

      const { seconds, minutes, hours } = this.state;

      return (
         <div className="clock">
            <button 
               type="button"
               className="clock__run-btn"
               onClick={this.startClocks}
               >
                  {'>'}
            </button>
            <button 
               type="button"
               className="clock__stop-btn"
               onClick={this.stopClocks}
               >
                  ||
            </button>
            <div className="clock__display">
               <p> {hours} h </p>
               <p> {minutes} min </p>
               <p> {seconds} sec </p>
            </div>
         </div>
      );
   };
};