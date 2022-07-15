import React, { Component } from 'react'

export default class UsersForm extends Component {
state = {
        name: '',
        surname: '',
        email:'',
    }

  render() {
        return (<form className='input_block form' onSubmit={this.formSubmit}>
                <input className='input_elements' name='name' value={this.state.name} onChange={this.getInput} placeholder="Enter your name!"/>
                <input className='input_elements' name='surname' value={this.state.surname} onChange={this.getInput} placeholder="Enter your surname!"/>
                <input className='input_elements' name='email' value={this.state.email} onChange={this.getInput} placeholder="Enter your e-mail!"/>
                <button className='input_btn'>Add Contact</button>
            </form>
        )
    }
    
    getInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    formSubmit = (e) => {
        e.preventDefault();

        const users = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
        }

        this.setState({
            name: '',
            surname: '',
            email: '',
        })

        this.props.onAddUsers(users);
    }
}
    