import React from 'react'
import {connect} from 'react-redux'


class GadgetInput extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> <br></br>
                    <label>Image:</label>   
                    <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleChange} /> <br></br>
                    <label>Description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} /> <br></br>
                    <label>Link:</label>
                    <input type="text" name="link" value={this.state.link} onChange={this.handleChange} /> <br></br>
                    <br></br>
                </form>
            </div>
        )

    }

}

export default connect(null)(GadgetInput)