import React from 'react'
import {connect} from 'react-redux'

import {fetchCats} from '../actions/fetchCats'
import Cats from '../components/Cats'
import CatInput from '../components/CatInput'

class CatsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCats()
    }

    render() {
        return ( 
            <div>
                <CatInput/>
                <Cats cats={this.props.cats}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
   return {
       cats: state.cats
   } 
}

export default connect(mapStateToProps, {fetchCats}) (CatsContainer) 

