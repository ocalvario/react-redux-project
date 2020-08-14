import React from 'react'


class CatInput extends React.Component {

    state = { name: '', image_url: '', country: ''}

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value 
        })
    }

    render() {
        return (
            <div>
                <form>
                   <label>Name: </label>
                   <input type="text" placeholder="Name" value={this.state.name} name="name" onChange ={this.handleChange} /> <br></br>
                   <label>Image Url: </label>
                   <input type="text" placeholder="Image Url" value={this.state.image_url} name="image_url" onChange ={this.handleChange} /> <br></br>
                   <label>Description: </label>
                   <input type="text" placeholder="Country" value={this.state.country} name="country" onChange ={this.handleChange} /> <br></br>
                </form>  
                <br></br>
            </div>
        )
    }

}

export default CatInput