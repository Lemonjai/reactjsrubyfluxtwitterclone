import React from 'react';
import UserStore from '../stores/UserStore';

let getAppState = () => {
  return { users: UserStore.getAll() };
};

export default class Follow extends React.Component{

  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  render() {
    let users = this.state.users.map( user => {
      return(
        <li className="collection-item avatar">
          <img src={user.gravatar} className="circle" className="circle" />
          <span className="title">{user.name}</span>
        </li>
      )
    });
    return(
      <div>
        <h3>Who to follow</h3>
      </div>
    );
  }
}