import React from 'react';
import { connect } from 'react-redux';
import {itemClicked, buy, nav, fetchData} from './actions';
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
    this.buyItem = this.buyItem.bind(this);
    //State was deleted from here
  }

  componentDidMount() {

    this.props.dispatch(fetchData());
    console.log("componentDidMount\nNothing is happening here at the moment.");

    // !! It was a problem that test-data was put to componentDidMount, it behaved like this.props.data does not exist when calling this.props.data[0]

  }

  itemClicked(i) {
    console.log("Item clicked: ", i);

    //We both need to change display and currentItem
    this.props.dispatch(itemClicked(i));
    this.props.dispatch(nav("item"));

    console.log("currentItem: ", this.props.currentItem);
  }


  //This we will also delete later
  buyItem(id) {
    console.log("This is the id of the selected item: ", id);
    //This is display action
    this.props.dispatch(buy(id));
    this.props.dispatch(nav("buy"));
  }

  render() {
      return (
      <div className="App">
        <header className="App-header">
          {/* Header is currently empty*/}
        </header>

        <nav>
          <ul>
            <li><button onClick={() => this.props.dispatch(nav("board"))} >Shop</button></li>
            <li><button onClick={() => this.props.dispatch(nav("about"))} >About</button></li>
          </ul>
        </nav>

        {/*This is where content is loaded*/}
        <MainArea 
          itemClicked={this.itemClicked}
          buyItem={this.buyItem}
        />

        <footer>
          This is the footer.
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listItems: state.listItems,
    currentItem: state.currentItem,
    currentDisplay: state.currentDisplay,
  }
}

export default connect(mapStateToProps)(App);
