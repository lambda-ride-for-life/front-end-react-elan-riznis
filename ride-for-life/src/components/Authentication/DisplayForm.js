import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import {Route} from 'react-router-dom'

const DisplayForm = () => {
    return (
        <>
            <Route exact path='/' component={Login} />
            <Route exact path='/signup' component={SignUp} />
        </>
    )
}

export default DisplayForm