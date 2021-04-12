import React, { Component } from 'react'
import MainRouter from './MainRouter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode'

export class App extends Component {
  state = {
    user: null,
    loggedIn: false,
  }
  
  componentDidMount() {
    let getJWToken = localStorage.getItem('jwtToken')
    console.log(getJWToken)
    if(getJWToken) {
      const currentTime = Date.now() / 1000;
      console.log(currentTime)
      let decodedJWToken = jwtDecode(getJWToken)
      console.log(decodedJWToken)
      if(decodedJWToken.exp < currentTime) {
        this.handleUserLogout();
      } else {
        this.handleUserLogin(decodedJWToken)
      }
      // if(currentTime > decodedJWToken.exp)
    }
  }

  handleUserLogin = (user) => {
      this.setState({
        user: {
          email:user.email,
        }
    })
  }

  handleUserLogout = () => {
    localStorage.removeItem('jwtToken')
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <ToastContainer />
        <MainRouter 
          user={this.state.user}
          handleUserLogin={this.handleUserLogin}
          handleUserLogout={this.handleUserLogout}
          />
      </>
    )
  }
}

// only one export default for each file
export default App;
