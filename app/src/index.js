import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const initialState = {
  //For testing only
  /** Products for sale. Fetched from blockchain structure:
   * id: unique id
   * item_name: Name of the item
   * desc: Description
   * price: Price
   * category: Main catagory
   * quantity: How many items left, or infinite
   */
  listItems: 
  [
    {id: "0", item_name: "Sprite", desc: "It's a Sprite", price: "2", category: "all", quantity: "50"}, 
    {id: "1", item_name: "Cola", desc: "It's a Cola", price: "2.5", category: "all", quantity: "60"}
  ],
  currentItem: null,
  currentDisplay: "board",        // board | item | about
}

function reducer(state = initialState, action) {
  console.log("Reducer: ", state, action);
  //  Surely item numbers gets down here. action.item is correct.

  switch (action.type) {
    case "NAV":
      return {
        currentDisplay: action.display,
      };
    case "ITEM_CLICKED": 
      return {
        currentItem: action.item,
      };
    case "BUY":
      return {
        buy: "Not specified",
      };
    default:
      return state;
  }
}

const store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
