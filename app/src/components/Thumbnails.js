import React from 'react';

class Thumbnails extends React.Component {
    render() {
        //Array which will be rendered finaly.
        let items = [];

        for (let i = 0; i < this.props.listItems.length; i++) {
            //Pushing thumbnails to array
            items.push(
                <div id="oneSingleItem" className="thumbnail" onClick={() => this.props.itemClicked(i)}>
                    <img src={require("../default.jpg")} className="thumbnailImage"></img>
                    <label id="itemName" className="thumbnailLabel">{this.props.listItems[i].item_name}</label>
                </div>
            );  
        }


        return(
            <div id="items-board" className="board">
                {items}
            </div>
        ); 
    }
}

export default Thumbnails;