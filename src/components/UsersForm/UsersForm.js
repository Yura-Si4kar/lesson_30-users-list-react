import React, { Component } from 'react'

export default class UsersForm extends Component {
state = {
        name: '',
        surname: '',
        email: '',
        error: false,
    }

  render() {
        return (<form className='input_block form' onSubmit={this.formSubmit}>
                <p className={
                    'error' +
                    (this.state.error ? ' show' : '')
                } name='error' value={this.state.error}>Wrong! Fill in all fields!</p>
                <input className='input_elements' name='name' value={this.state.name} onChange={this.getInput} placeholder="Enter your name!"/>
                <input className='input_elements' name='surname' value={this.state.surname} onChange={this.getInput} placeholder="Enter your surname!"/>
                <input className='input_elements' name='email' value={this.state.email} onChange={this.getInput} placeholder="Enter your e-mail!" />
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
        
        if (!this.validateFilds(this.state.name) ||
            !this.validateFilds(this.state.surname) ||
            !this.validateFilds(this.state.email)
        ) {
            return this.setState({
                name: '',
                surname: '',
                email: '',
                error: true,
            })
        }

        this.setState({
            name: '',
            surname: '',
            email: '',
            error: false,
        })
        
        this.props.onAddUsers(users);
    }

    validateFilds(input) {
        return input !=='';
    }
}
    