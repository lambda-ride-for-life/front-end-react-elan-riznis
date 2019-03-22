import React from 'react'

class EditDriver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            driver: this.props.activeDriver
        }
    }


    editDriver = event => {
        event.preventDefault();
        
            
        this.setState({
          driver: {
            name: '',
            age: '',
            location: '',
            price: '',
          }
        });
        this.props.updateDriver(event, this.state.driver)
      }
    
      componentDidUpdate(prevState) {
        if (
            this.props.activeDriver && prevState.activeDriver !== this.props.activeDriver
        ) {
            this.setState({
                driver: this.props.activeDriver
            })
        }
      }
    
      handleInputChange = e => {
        e.persist()
        this.setState(prevState => ({
          driver:{
            ...prevState.driver,
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