import { useState } from "react";
import Header from "./components/Header/Header";
import Table from "./components/ResultTable/Table";
import UserInput from "./components/userInput/UserInput";
function App() {
  // const [data,setData]= useState(null);
  const [userInput, setUserInput] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    setShowResults(true);
  };

  const resetHandler = () => {
    setShowResults(false);
  };
  const yearlyData = []; // per-year results

  if (userInput) {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // setData(yearlyData)
    // do something with yearlyData ...
  } else {
    console.log(userInput);
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} onReset={resetHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!showResults && <p>No investment calculated.</p>}
      {showResults && (
        <Table
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
