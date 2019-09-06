import React, { Component } from 'react';

import {connect} from 'react-redux';



import Tabs from './Stuff/Tabbulare';
import './css/legend.css';

class Legend extends Component {
    state = {  }
    render() { 
        return (
            <div className="legendContainer">

                <Tabs knowledge={this.props.content}/>

            </div>
        );
    }
}
 


const couldBeCAlledWhateverIWAnted = (state) => {
    return {
      content:state.tabs.h1
    }
  }
  
  const thinkOfItasSecondPartMaybe = (dispach) => {
    return{
        // i think it's like extra stuff to the states... inspect it in the browser and turn it on
      onAgeUp: () => dispach({type:'Age_UP'}),
      //onAgeDown: () => dispach({type:'Age_DOWN'})
    }
  }
  
  export default connect(couldBeCAlledWhateverIWAnted, thinkOfItasSecondPartMaybe) (Legend);
  