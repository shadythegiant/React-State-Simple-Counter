import { useState } from "react";

export function App() {
  const today = new Date();

  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  today.setDate(today.getDay() + counter);

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
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        {/* <button className="btn increase" onClick={updateStep}>
          +
        </button> */}
        <p>{`Step : ${step}`}</p>
        {/* <button className="btn" onClick={updateStep}>
          -
        </button> */}
      </div>
      <div className="box">
        <button className="btn" onClick={updateCounter}>
          +
        </button>{" "}
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(step + Number(e.target.value))}
        />
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
