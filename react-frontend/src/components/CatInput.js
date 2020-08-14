import React from 'react'


class CatInput extends React.Component {

    render() {
        return (
            <div>
                <form>
                   <label>Name: </label>
                   <input type="text" placeholder="Name"/> <br></br>
                   <label>Image Url: </label>
                   <input type="text" placeholder="Image Url"/> <br></br>
                   <label>Description: </label>
                   <input type="text" placeholder="Description"/> <br></br>
                   <label>Link: </label>
                   <input type="text" placeholder="Link"/> <br></br>
                </form>  
                <br></br>
            </div>
        )
    }

}

export default CatInput