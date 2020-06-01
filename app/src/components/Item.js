import React from 'react';
import { connect } from 'react-redux';
import {itemClicked, buy, nav} from '../actions';

class Item extends React.Component {
    
    render() {
        //This very same sentence from Thumbnails, is working. From here, not working. Obviously something is not connected properly.
        
        let selectedItem = this.props.listItems[this.props.currentItem];
        
        //Image not accessable is not tested

        if (selectedItem.hasOwnProperty('image')) {
            //In case there is an image for this item
            return(
                <div id="itemDescription" className="itemDescription">
                    <div id="imageColumn" className="itemDescriptionCol0">
                        <img src={selectedItem.image} className="fullpageImage" alt={selectedItem.name}></img>
                    </div>
                    <div id="descColumn"  className="itemDescriptionCol1">
                        <h1 id="itemName" className="fullpageName">{selectedItem.item_name}</h1>
                        <p id="itemDesc" className="fullpageDesc">{selectedItem.desc}</p>
                        <label id="itemPrice" className="fullpagePrice">Price: {selectedItem.price} SG</label>
                        <label id="itemQuantity" className="fullpageQuant">Quantity left: {selectedItem.quantity}</label>
                        <button id="buy" className="buyButton" onClick={() => this.props.buyItem(selectedItem.id)} >BUY</button>
                    </div>
                </div>
            );
        } else {
            //If there is no image uploaded for this item
            return(
                <div id="itemDescription" className="itemDescription">
                    <div id="imageColumn" className="itemDescriptionCol0">
                        <img src={require("../default.jpg")} className="fullpageImage" alt={selectedItem.name}></img>
                    </div>
                    <div id="descColumn"  className="itemDescriptionCol1">
                        <h1 id="itemName" className="fullpageName">{selectedItem.item_name}</h1>
                        <p id="itemDesc" className="fullpageDesc">{selectedItem.desc}</p>
                        <label id="itemPrice" className="fullpagePrice">Price: {selectedItem.price} SG</label>
                        <label id="itemQuantity" className="fullpageQuant">Quantity left: {selectedItem.quantity}</label>
                        <button id="buy" className="buyButton" onClick={() => this.props.buyItem(selectedItem.id)} >BUY</button>
                    </div>
                </div>
            );
        }

    }
}

function mapStateToProps(state) {
    return {
      listItems: state.listItems,
      currentItem: state.currentItem,
    }
  }

export default connect(mapStateToProps)(Item);