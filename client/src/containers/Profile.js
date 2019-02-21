import React, { Component } from 'react';

class Profile extends Component {
  state = {
    user: null
  }

  // componentDidMount() {
  //   this.getUserData()
  // }

  // getUserData = () => {
  //   const jwtToken = localStorage.getItem('jwtToken')
  //   fetch('/user', {
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${jwtToken}`
  //     }
  //   })
  //   .then(resp => resp.json())
  //   .then(userInfo => {
  //     this.setState({user: userInfo})
  //   })
  // }

  render() {
    let user = this.state.user
    return (
      <div>
        {/* {user &&
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.location}</p>
        </div>
        } */}
      </div>
    );
  }
}

export default Profile;