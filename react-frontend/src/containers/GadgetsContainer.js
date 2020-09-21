import React from 'react'
import GadgetInput from '../components/GadgetInput'
import Gadgets from '../components/Gadgets'


class GadgetsContainer extends React.Component {

render() {
    return (
        <div>
            <GadgetInput cat={this.props.cat}/>
            <Gadgets gadgets={this.props.cat && this.props.cat.gadgets} />
        </div>

    )


}

}

export default GadgetsContainer