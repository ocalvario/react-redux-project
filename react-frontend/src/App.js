import React from 'react';
import {connect} from 'react-redux'
import CatsContainer from './containers/CatsContainer'

class App extends React.Component {
  

  render() {
    return (
      <div className="App">
       <CatsContainer/>
      </div>
    );
  }  

}
 
export default App;
