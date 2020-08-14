import React from 'react';
import {connect} from 'react-redux'
import {fetchCats} from './actions/fetchCats';

class App extends React.Component {
  
  componentDidMount() {
    // fetch ('http://localhost:3000/api/v1/cats')
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
      App
      </div>
    );
  }  

}
 
// const mapStateToProps = (state) => {
//   return {
//     cats: state.cats
//   }
// }

export default connect(null, {fetchCats} )(App);
