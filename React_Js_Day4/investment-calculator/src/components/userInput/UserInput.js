import "./UserInput.css";
import { useState } from "react";

const initialInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialInput);
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);

    // setUserInput(initialInput);
  };

  const resetHandle = () => {
   <p>No investment calculated.</p>
    setUserInput(initialInput);
    props.onReset();
    
  };

  const changeHandler = (source, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [source]: value };
    });
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings (₹)</label>
          <input
            type="number"
            min="1000"
            max="1000000"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(event) =>
              changeHandler("current-savings", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            min="100"
            max="200000"
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) =>
              changeHandler("yearly-contribution", Number(event.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            step="0.1"
            value={userInput["expected-return"]}
            id="expected-return"
            onChange={(event) =>
              changeHandler("expected-return", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
          min="1" max="25"
            type="number"
            value={userInput.duration}
            id="duration"
            onChange={(event) => changeHandler("duration", Number(event.target.value))}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandle} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
export default UserInput;
