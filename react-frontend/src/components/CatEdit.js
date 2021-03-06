import React from 'react'
import {connect} from 'react-redux'
import {editCat} from '../actions/editCat'
import '../App.css'

class CatEdit extends React.Component {

    state = { name: '', image_url: '', country: ''}

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let cat = { ...this.state, id: this.props.cat.id}
        this.props.editCat(cat)
        this.setState({
            name: '', image_url: '', country: ''  
        })
    }

    render() {
        return (
            <div className="App">
                <div className="edit">
                    <h3 className="kittys">Edit Cat</h3>
                    <form onSubmit = {this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td> <label>Name: </label> </td>
                                    <td> <input type="text" placeholder="Name" value={this.state.name} name="name" onChange ={this.handleChange} /> </td>
                                </tr>
                                <tr>
                                    <td> <label>Image Url: </label> </td>
                                    <td> <input type="text" placeholder="Image Url" value={this.state.image_url} name="image_url" onChange ={this.handleChange} /> </td>
                                </tr>
                                <tr>
                                    <td> <label>Description: </label> </td>
                                    <td> <input type="text" placeholder="Country" value={this.state.country} name="country" onChange ={this.handleChange} /> </td>
                                </tr>
                            </tbody>
                            </table>
                            <br/>
                            <input type="submit" value="Edit Cat"  className="change"/>
                    </form> 
                </div>
             
                <br></br>
            </div>
        )
    }

}

export default connect(null, {editCat})(CatEdit)