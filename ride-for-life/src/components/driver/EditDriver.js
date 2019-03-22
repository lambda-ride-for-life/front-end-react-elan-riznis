import React from 'react'
import axios from 'axios'
import { apiUri } from '../../GlobalVariables'
import axiosConfig from '../../AxiosConfig'

class EditDriver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDriver: {
                name: ''
            }
            // driver: this.props.activeDriver
        }
    }

    componentDidMount() {
        axios
        .get(`${apiUri}/api/drivers/${this.props.driver.id}`, axiosConfig)
        .then(response => this.setState({activeDriver: {
            name: response.data.name}}))
        .catch(error => {this.setState({error: error})})
    }


    editDriver = event => {
        event.preventDefault();
        
        this.props.updateDriver(event, this.state.activeDriver)
        this.setState({
          activeDriver: {
            name: '',
            // age: '',
            // location: '',
            // price: '',
          }
        });
        
      }
    
    //   componentDidUpdate(prevState) {
    //     if (
    //         this.props.activeDriver && prevState.activeDriver !== this.props.activeDriver
    //     ) {
    //         this.setState({
    //             driver: this.props.activeDriver
    //         })
    //     }
    //   }
    
      handleInputChange = e => {
        e.persist()
        this.setState(prevState => ({
          driver:{
            ...prevState.activeDriver,
            [e.target.name]: e.target.value
             }
          }));
      };


    render() {
        return(
            <div>
                <form onSubmit={this.editDriver}>
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.props.driver.name}
            name="name"
          />
          <button type="submit">Edit Driver</button>
        </form>
            </div>
        )
    }
}


export default EditDriver