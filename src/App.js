import { useState } from "react";

export function App() {
  const today = new Date();

  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  today.setDate(today.getDay() + counter);

  //   function to update step

  function updateStep(e) {
    if (e.target.innerHTML === "+") {
      setStep(step + 1);
    } else {
      if (step === 1) {
        return;
      } else {
        setStep(step - 1);
      }
    }
  }

  //   function to update counter

  function updateCounter(e) {
    if (e.target.innerHTML === "+") {
      setCounter(counter + step);
    } else {
      setCounter(counter - step);
    }
  }

  // JSX
  return (
    <div className="container">
      <div className="box">
        <button className="btn increase" onClick={updateStep}>
          +
        </button>
        <p>{`Step : ${step}`}</p>
        <button className="btn" onClick={updateStep}>
          -
        </button>
      </div>
      <div className="box">
        <button className="btn" onClick={updateCounter}>
          +
        </button>{" "}
        <p>{`Count : ${counter}`}</p>
        <button className="btn" onClick={updateCounter}>
          -
        </button>
      </div>

      <div className="date">
        <span>
          {counter === 0
            ? "Today is"
            : counter > 0
            ? `${counter} days from today is`
            : `${Math.abs(counter)} days ago is `}
        </span>
        <span>{today.toDateString()}</span>
      </div>
    </div>
  );
}
