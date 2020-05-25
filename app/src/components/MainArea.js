import React from 'react';
import Thumbnails from './Thumbnails';
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
                            listItems={this.props.listItems} 
                            itemClicked={this.props.itemClicked}
                        />
        
                    </div>
                );
            }
            case "item": {
                return(
                    <div id="mainArea" className="mainArea">
                        <Item item={this.props.listItems[this.props.currentItem]} />
                    </div>
                );
            }
            case "about": {
                return(
                    <div id="mainArea" className="mainArea">
                        <h1>About us</h1>
                        <p>There is nothing to say really.</p>
                        <p>We don't know yet what we are doing.</p>
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

export default MainArea;

//Module not found: Can't resolve './default.jpg' in '/home/user/IPFS-Store/app/src/components' so it is searching in the same folder as where is the file.