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
                    <h4>Add a new gadget:</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Name:</label> </td>
                                <td><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> </td>
                            </tr>
                            <tr>
                                <td> <label>Image:</label> </td>
                                <td> <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleChange} /> </td>
                            </tr>
                            <tr>
                                <td> <label>Description:</label> </td>
                                <td>   <input type="text" name="description" value={this.state.description} onChange={this.handleChange} /> </td>
                            </tr>
                            <tr>
                                <td><label>Link:</label></td>
                                <td><input type="text" name="link" value={this.state.link} onChange={this.handleChange} /> </td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <input type="submit"/>
                    <br/> <br/>

                </form>
            </div>
        )

    }

}

export default connect(null, {addGadget} )(GadgetInput)