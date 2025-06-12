import Header from './Components/Layout/Header';
import { Fragment,useState } from 'react';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {

const[cartIshown,setCartIsShown]=useState(false);

const ShowCartHandler=()=>{
  setCartIsShown(true);
}

const HideCartHandler=()=>{
  setCartIsShown(false);
}

  return (
    <Fragment>
      {cartIshown && <Cart onCloseCart={HideCartHandler}/>}
      <Header onShowCart={ShowCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App;
