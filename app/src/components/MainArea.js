import React from 'react';
import Thumbnails from './Thumbnails';
import { connect } from 'react-redux';
import Item from './Item';

class MainArea extends React.Component {

    render() {

        //There should be conditional rendering for MainArea
        console.log("currentDisplay: ", this.props.currentDisplay);


        switch (this.props.currentDisplay) {
            case "board": {
                return(
                    <div id="mainArea" className="mainArea">
                        
                        {/* 1 item test */}
                        <Thumbnails 
                            itemClicked={this.props.itemClicked}
                        />
        
                    </div>
                );
            }
            case "item": {
                return(
                    <div id="mainArea" className="mainArea">
                        <Item buyItem={this.props.buyItem} />
                    </div>
                );
            }
            case "about": {
                return(
                    <div id="mainArea" className="mainArea">
                        <h1>About us</h1>
                        <p>Concept is still under development.</p>
                    </div>
                );
            }
            case "buy": {
                return(
                    <div id="mainArea" className="mainArea">
                        <h1>Buy button was clicked.</h1>
                        <p>This function is not implemented yet.</p>
                    </div>
                );
            }
            default: {
                return(
                    <div id="mainArea" className="mainArea">
                        <h1>Press Shop!</h1>
                    </div>
                );
            }
        }


    }
}

function mapStateToProps(state) {
    return {
      listItems: state.listItems,
      currentItem: state.currentItem,
      currentDisplay: state.currentDisplay,
    }
  }

export default connect(mapStateToProps)(MainArea);

//Module not found: Can't resolve './default.jpg' in '/home/user/IPFS-Store/app/src/components' so it is searching in the same folder as where is the file.