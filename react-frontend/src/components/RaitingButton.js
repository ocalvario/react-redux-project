import React from 'react'

class RaitingButton extends React.Component {   
    
  state = {count: 0}

        componentDidMount() {
        window.addEventListener("click", this.handleMouseClick);
        }

        componentWillUnmount() {
        window.removeEventListener("click", this.handleMouseClick);
        }

        handleMouseClick = (e) => {
            if (String(this.props.id) === e.target.id)
            {this.setState({count: 1})}
            else {this.setState ({count: 0})}          

        }
     

    render () {
        return (
                
                <button id={this.props.id}> Votes: {this.state.count} </button>
        
        )
        }
}

export default RaitingButton
