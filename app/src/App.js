import React from 'react';
import './App.css';
import MainArea from './components/MainArea'

/**
 * IPFS Store
 * Shop without a centralized server
 * List-items are stored on blockchain
 * @author imestin
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.itemClicked = this.itemClicked.bind(this);
    this.navButtons = this.navButtons.bind(this);
    this.state = {
      note: "It would be good to use Redux",
      //For testing only
      /** Products for sale. Fetched from blockchain structure:
       * item_name: Name of the item
       * desc: Description
       * price: Price
       * quantity: How many items left, or infinite
       */
      listItems: 
      [
        {item_name: "Sprite", desc: "It's a Sprite", price: "2", quantity: "50"}, {item_name: "Cola", desc: "It's a Cola", price: "2.5", quantity: "60"}
      ],
      currentItem: null,
      currentDisplay: "board",        // board | item | about
    }
  }

  componentDidMount() {
    fetch('./MOCK_DATA.json')
      .then(res => res.json())
      .then(json => this.setState( {listItems: json} ))
      .catch(msg => console.error(msg));

      

    // !! It was a problem that test-data was put to componentDidMount, it behaved like this.props.data does not exist when calling this.props.data[0]

  }

  itemClicked(i) {
    console.log("Item clicked: ", i);

    this.setState( { 
      currentItem: i,
      currentDisplay: "item",
    });
  }

  navButtons(pressedButton) {
    if (pressedButton === "shop") {
      this.setState({
        currentDisplay: "board",
        test: "random",
      });
    }
    if (pressedButton === "about") {
      this.setState({
        currentDisplay: "about",
      })
    }
  }

  render() {
      return (
      <div className="App">
        <header className="App-header">
          {/* Header is currently empty*/}
        </header>

        <nav>
          <ul>
            <li><button onClick={() => this.navButtons("shop")} >Shop</button></li>
            <li><button onClick={() => this.navButtons("about")} >About</button></li>
          </ul>
        </nav>

        {/*This is where content is loaded*/}
        <MainArea 
          listItems={this.state.listItems} 
          itemClicked={this.itemClicked} 
          currentDisplay={this.state.currentDisplay}
          currentItem={this.state.currentItem}
        />

        <footer>
          This is the footer.
        </footer>
      </div>
    );
  }
}

export default App;
