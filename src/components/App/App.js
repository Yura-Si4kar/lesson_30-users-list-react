import '../../css/index.css';

import React, { Component } from 'react'
import UsersForm from '../UsersForm/UsersForm';
import UsersList from '../UsersList/UsersList';
import { deleteUsers, getUsersList, insertUserInList } from '../../api';

export default class App extends Component {
state = {
  list: [],
  }
  
  componentDidMount() {
    this.fetchList();
  }

  render() {
    return (
      <>
        <UsersList
          list={this.state.list}
          onDeleteBtnClick={this.deleteUser}
          onEditBtnClick={this.editUser}
        />
        <UsersForm
          onAddUsers={this.addUser}
        />
      </>
    )
  }

  fetchList() {
      return getUsersList()
      .then((data) => this.setState({
        list: data
      }));
  }  

  addUser = (users) => {
    return insertUserInList(users)
      .then(data => {
        this.setState({
          list: [...this.state.list, data],
        });
    })
  }

  deleteUser = (id) => {
    this.setState({
      list: this.state.list.filter((users) => users.id !== id),
    });

    return deleteUsers(id);
  }

  editUser = () => {
  }
}
