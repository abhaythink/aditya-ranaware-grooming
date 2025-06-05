import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm(props) {
  //here we create state---
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //combine 3 states into one array
  // const[Values,setUserInput]=useState({
  //     title : '',
  //     amount : '',
  //     date : ''
  // });
  /*
const titleHandler=(event)=>{
    // setUserInput({
    //     ...Values,
    //     title : event.target.value,
    // })
    setTitle(event.target.value);
}

const amountHandler=(event)=>{
    // setUserInput({
    //     ...Values,
    //     amount : event.target.value,
    // })
    setAmount(event.target.value)
}

const dateHandler=(event)=>{
    // setUserInput((oldValues)=>{
    //     return {...oldValues,
    //     date : event.target.value};
    // });
    setDate(event.target.value)
    console.log(title,amount,date);
};
*/
  // we create one function called inputHandler which update all 3 attributes using identifier
  function inputHandler(identifier, value) {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "date") {
      setDate(value);
    } else {
      setAmount(value);
    }
  }
  //on Submiting form
  const submitHandler = (event) => {
    event.preventDefault();

    const expressData = {
      id: Math.random().toString(),
      title: title,
      amount: amount,
      date: new Date(date),
    };
    setAmount("");
    setDate("");
    setTitle("");
    props.onDataSubmit(expressData);
    // console.log(props.onDataSubmit);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => inputHandler("title", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={(event) => inputHandler("amount", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2022-01-01"
            max="2025-12-31"
            onChange={(event) => inputHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
