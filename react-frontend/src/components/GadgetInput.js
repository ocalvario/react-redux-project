import React from 'react'
import {connect} from 'react-redux'
import {addGadget} from '../actions/addGadget'


class GadgetInput extends React.Component {

    state = {
       name: '',
       image_url: '',
       description: '',
       link: '' 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addGadget(this.state, this.props.cat.id)
        this.setState({
            name: '',
            image_url: '',
            description: '',
            link: '' 
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> <br></br>
                    <label>Image:</label>   
                    <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleChange} /> <br></br>
                    <label>Description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} /> <br></br>
                    <label>Link:</label>
                    <input type="text" name="link" value={this.state.link} onChange={this.handleChange} /> <br></br>
                    <input type="submit"/>
                    <br></br>

                </form>
            </div>
        )

    }

}

export default connect(null, {addGadget} )(GadgetInput)