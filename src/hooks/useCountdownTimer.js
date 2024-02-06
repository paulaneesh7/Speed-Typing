import { useCallback, useState, useRef, useEffect } from "react";

const useCountdownTimer = (seconds) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef(null); // will help in clearing the interval

  // reduce the timeLeft by 1 every 1sec
  const startCountdown = useCallback(() => {
    console.log("starting countdown....");

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, []);

  // clear the timeInterval if one is set already and set the time left back to provided seconds
  const resetCountdown = useCallback(() => {
    console.log("resetting countdown");

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeLeft(seconds);
  }, [seconds]);

  // when the countdown reaches 0, clear the countdown interval
  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      console.log("clearing timer...");

      clearInterval(intervalRef.current);
    }
  }, [timeLeft, intervalRef]);

  return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdownTimer;
