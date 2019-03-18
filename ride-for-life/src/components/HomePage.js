import React from 'react'
// import Login from './Authentication/Login'
import Authenticate from './Authentication/Authenticate'
import DisplayForm from './Authentication/DisplayForm'
// import { Route } from 'react-router-dom'

class HomePage extends React.Component {
    constructor() {
        super();
        this.state ={}
    }



    render() {
        return(
            <>
                Hi
                
            </>
        )
    }
} 


export default Authenticate(HomePage)(DisplayForm)