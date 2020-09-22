import React from 'react'
import {connect} from 'react-redux'
import {editCat} from '../actions/editCat'


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
            <div>
                <h3>Edit Cat</h3>
                <form onSubmit = {this.handleSubmit}>
                   <label>Name: </label>
                   <input type="text" placeholder="Name" value={this.state.name} name="name" onChange ={this.handleChange} /> <br></br>
                   <label>Image Url: </label>
                   <input type="text" placeholder="Image Url" value={this.state.image_url} name="image_url" onChange ={this.handleChange} /> <br></br>
                   <label>Description: </label>
                   <input type="text" placeholder="Country" value={this.state.country} name="country" onChange ={this.handleChange} /> <br></br>
                   <input type="submit" value="Edit Cat" />
                </form>  
                <br></br>
            </div>
        )
    }

}

export default connect(null, {editCat})(CatEdit)