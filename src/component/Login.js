import React, { Component } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'

export class Login extends Component {
    state = {
        email: "",
        password: "",
    }

    handleOnChangeLogin = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleOnSubmit = async (event) => {
        event.preventDefault();
        let { email, password } = this.state
        try {
            let result = await axios.post("http://localhost:3001/users/login", {
                email,
                password,
            })
            console.log(result)
            if(result.data.message === "Success") {
            toast.success("Yas!!! you are logged in now", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error("Check your email and password", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="form-body">
                <main className="form-signin">
                    <form onSubmit={this.handleOnSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Please Log In</h1>
                        <label htmlFor="inputEmail" className="visually-hidden">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Email address"
                            required
                            autoFocus
                            name="email"
                            value={email}
                            onChange={this.handleOnChangeLogin}
                        />
                        <label htmlFor="inputPassword" className="visually-hidden">
                            Password
                        </label>
                        <input
                            //type="password"
                            type="text"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            required
                            name="password"
                            value={password}
                            onChange={this.handleOnChangeLogin}
                        />
                        <button className="w-100 btn btn-lg btn-primary" type="submit">
                            Log in
                        </button>
                    </form>
                </main>
            </div>
        )
    }
}

export default Login
