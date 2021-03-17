import React, { Component } from 'react'
import MainRouter from './MainRouter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  render() {
    return (
      <>
        <ToastContainer />
        <MainRouter />
      </>
    )
  }
}

// only one export default for each file
export default App;
