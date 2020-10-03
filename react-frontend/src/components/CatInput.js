import React from 'react'
import {connect} from 'react-redux'
import {addCat} from '../actions/addCat'
import '../App.css'

class CatInput extends React.Component {

    state = { name: '', image_url: '', country: ''}

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCat(this.state)
        this.setState({
            name: '', image_url: '', country: ''  
        })
    }

    render() {
        return (
            <div className="App">
                <div className="edit" >
                    <h3 className="kittys">Add a new cat</h3>
                    <form onSubmit = {this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Name: </label></td>
                                    <td><input type="text" placeholder="Name" value={this.state.name} name="name" onChange ={this.handleChange} /> </td>
                                </tr>
                                <tr>
                                    <td><label>Image Url: </label> </td>
                                    <td><input type="text" placeholder="Image Url" value={this.state.image_url} name="image_url" onChange ={this.handleChange} /> </td>
                                </tr>
                                <tr>
                                    <td> <label>Description: </label> </td>
                                    <td><input type="text" placeholder="Country" value={this.state.country} name="country" onChange ={this.handleChange} /> </td>
                                </tr>
                            </tbody>
                            </table>
                            <br></br>
                            <input type="submit" className="change"/>
                    
                    </form>  
                    <br></br>

                </div>

            </div>
        )
    }

}

export default connect(null, {addCat})(CatInput)