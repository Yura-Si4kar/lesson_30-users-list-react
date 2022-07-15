import React, { Component } from 'react'

export default class UsersList extends Component {
    render() {
        return (
            <table className='list_block'>
                <thead className='table_head'>
                    <tr>
                        <td>Name</td>
                        <td>E-mail</td>
                        <td>Phone_number</td>
                        <td>Eidt/Delete Button</td>                      
                    </tr>
                </thead>
                <tbody className='input_blocks'>
                    {this.props.list.map((users) => (                    
                        <tr className='list_elements' key={users.id}>
                            <td>{users.name}</td>
                            <td>{users.surname}</td>
                            <td>{users.email}</td>
                            <td>
                                <button className='edit-btn' onClick={() => this.props.onEditBtnClick(users.id)}>Edit</button>
                                <button className='delete-btn' onClick={()=>this.props.onDeleteBtnClick(users.id)}>Delete User</button>
                            </td>
                        </tr>          
                    ))}  
                </tbody>
            </table>
        )
    }
}

