import React from 'react'
// import Authenticate from './Authentication/Authenticate'
// import DisplayForm from './Authentication/DisplayForm'

import DriverList from './driver/DriverList'
import Driver from './driver/Driver'
import PrivateRoute from './Authentication/PrivateRoute'

import Login from './Authentication/Login'
import SignUp from './Authentication/SignUp'
import {Route} from 'react-router-dom'


class HomePage extends React.Component {
    constructor() {
        super();
        this.state ={
            // drivers: []
        }
    }

    // componentDidMount() {
    //     this.setState({ drivers: drivers})
    // }



    render() {
        return(
            
            <>
                
                <Route exact path='/' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <PrivateRoute exact path='/list' component={DriverList} />
                <PrivateRoute exact path='/list/:id' component={Driver} />
            </>
        )
    }
} 


export default HomePage