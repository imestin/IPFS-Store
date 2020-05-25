import React from 'react';

class Item extends React.Component {
    render() {
        return(
            <div id="itemDescription" className="itemDescription">
                <div id="imageColumn" className="itemDescriptionCol0">
                    <img src={require("../default.jpg")} className="fullpageImage" alt={this.props.item.name}></img>
                </div>
                <div id="descColumn"  className="itemDescriptionCol1">
                    <h1 id="itemName" className="fullpageName">{this.props.item.item_name}</h1>
                    <p id="itemDesc" className="fullpageDesc">{this.props.item.desc}</p>
                    <label id="itemPrice" className="fullpagePrice">Price: {this.props.item.price} SG</label>
                    <label id="itemQuantity" className="fullpageQuant">Quantity left: {this.props.item.quantity}</label>
                    <button id="buy" className="buyButton" onClick={() => this.props.buyItem(this.props.item.id)} >BUY</button>
                </div>
            </div>
        );
    }
}

export default Item;