import React, { useCallback, useEffect, useState } from 'react';
import './Clocks.css';

const Clocks = () => {

   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [ticking, setTicking] = useState(false);

   const timer = useCallback(() => {

      if (ticking && seconds < 60) {
         setSeconds((s) => s + 1);
      } else if (ticking && minutes < 60) {
         setMinutes((m) => m + 1);
         setSeconds(() => 0);
      } else if (ticking) {
         setHours((h) => h + 1);
         setMinutes(() => 0);
      }
   }, [minutes, seconds, ticking]);

   const startClocks = () => {
      setTicking(() => true);
   };

   const stopClocks = () => {
      setTicking(() => false);
   }

   useEffect(() => {
      const tick = setInterval(timer, 1000);

      return clearInterval(tick);
   }, [ timer ]);

   return (
      <div className="clock">
         <button 
            type="button"
            className="clock__run-btn"
            onClick={startClocks}
            >
               {'>'}
         </button>
         <button 
            type="button"
            className="clock__stop-btn"
            onClick={stopClocks}
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

export default Clocks;