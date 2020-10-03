import React from 'react'
import GadgetInput from '../components/GadgetInput'
import Gadgets from '../components/Gadgets'


class GadgetsContainer extends React.Component {

render() {
    return (
        <div>
            <Gadgets gadgets={this.props.cat && this.props.cat.gadgets} />
            <GadgetInput cat={this.props.cat}/>
        </div>

    )


}

}

export default GadgetsContainer