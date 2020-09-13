import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom' 
import {fetchCats} from '../actions/fetchCats'
import Cats from '../components/Cats'
import Cat from '../components/Cat'
import CatInput from '../components/CatInput'

class CatsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCats()
    }

    render() {
        return ( 
            <div>
                <Switch>
                    <Route path='/cats/new' component={CatInput} />
                    <Route path='/cats/:id' render={(routerProps) => <Cat {...routerProps} cats={this.props.cats}/>} />
                    <Route exact path='/cats' render={(routerProps) => <Cats {...routerProps} cats={this.props.cats}/>} />
                </Switch>
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

