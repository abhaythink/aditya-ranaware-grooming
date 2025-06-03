import React from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Paper",
      amount: 2548,
      date: new Date(2025, 3, 6),
    },
    {
      id: "e2",
      title: "car Insurance",
      amount: 18000,
      date: new Date(2025, 6, 4),
    },
    {
      id: "e3",
      title: "Car service",
      amount: 9000,
      date: new Date(2025, 5, 26),
    },
    {
      id: "e4",
      title: "New TV",
      amount: 42500,
      date: new Date(2025, 4, 16),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Welcome To My First React Project"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  return (
    <div>
      <h1>
        <center>Welcome To My First React Project</center>
      </h1>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
