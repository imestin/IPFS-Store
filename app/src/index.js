import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
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
  loading: false,                 //Fetching data will set this to true
  error: null,                    //Fetch data error
}

function reducer(state = initialState, action) {
  console.log("Reducer: ", state, action);
  //  Surely item numbers gets down here. action.item is correct.

  switch (action.type) {
    case "NAV":
      return {
        ...state,
        currentDisplay: action.display,
      };
    case "ITEM_CLICKED": 
      return {
        ...state,
        currentItem: action.item,
      };
    case "BUY":
      return {
        ...state,
        buy: "Not specified",
      };
    case "FETCH_DATA_BEGIN":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        listItems: action.payload.products,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        listItems: [],
      };
    default:
      return state;
  }
}

//applyMiddleware is necesarry for fetching data, in actions.js
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);


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
