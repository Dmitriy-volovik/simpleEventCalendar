import React from 'react';
import ReactModalLogin from 'react-modal-login';
import { connect } from "react-redux";
import { createUserData, checkUserData, logOutAction } from "../actions/userActions";
import "../styles/modalLoginForm.css";

class ModalLoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            loading: false,
            error: null,
            initialTab: null,
        };

    }

    onLogin() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        if (!email || !password) {
            this.setState({
                error: true
            })
        } else {
            this.props.fetchDataCheck('/api/users/login', {
                email,
                password,
            })
            this.onLoginSuccess('form');
        }
    }

    onRegister() {
        const login = document.querySelector('#login').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const age = document.querySelector('#age').value;

        if (!login || !email || !password || !age) {
            this.setState({
                error: true
            })
        } else {
            this.props.fetchData('/api/users', {
                name: login,
                email,
                password,
                age
            }); 
            this.onLoginSuccess('form');

        }
    }

    openModal(initialTab) {
        this.setState({
            initialTab: initialTab
        }, () => {
            this.setState({
                showModal: true,
            })
        });
    }

    onLoginSuccess(method, response) {

        this.closeModal();
        this.setState({
            loading: false
        })
    }

    onLoginFail(method, response) {

        this.setState({
            loading: false,
            error: response
        })
    }


    closeModal() {
        this.setState({
            showModal: false,
            error: null
        });
    }

    startLoading() {
        this.setState({
            loading: true
        })
    }

    finishLoading() {
        this.setState({
            loading: false
        })
    }

    afterTabsChange() {
        this.setState({
            error: null
        });
    }

    onLogOutClick = () => {
        this.props.userLogOut();
    }

    render() {
        const isLogDisabled = this.props.isLogDisabled;

        return (
            <div className="main-div-modal-login">
                {!isLogDisabled? <button
                    className="RML-btn button-signIn"
                    onClick={() => this.openModal('login')}
                    disabled={isLogDisabled}
                >
                    Sign in
                 </button>
                 : ""}

                {!isLogDisabled ?<button
                    className="RML-btn button-logIn"
                    onClick={() => this.openModal('register')}
                    disabled={isLogDisabled}
                >
                    Log in
                  </button>
                : 
                <button
                        className="button-logOut btn btn-danger"
                    disabled={!isLogDisabled}
                    onClick={this.onLogOutClick.bind(this)}
                >
                    Log out
                  </button>}

                <ReactModalLogin
                    visible={this.state.showModal}
                    onCloseModal={this.closeModal.bind(this)}
                    initialTab={this.state.initialTab}
                    error={this.state.error}
                    tabs={{
                        afterChange: this.afterTabsChange.bind(this)
                    }}
                    loginError={{
                        label: "Couldn't sign in, please try again."
                    }}
                    registerError={{
                        label: "Couldn't log in, please try again."
                    }}
                    startLoading={this.startLoading.bind(this)}
                    finishLoading={this.finishLoading.bind(this)}
                    form={{
                        onLogin: this.onLogin.bind(this),
                        onRegister: this.onRegister.bind(this),

                        loginBtn: {
                            label: "Sign in"
                        },
                        registerBtn: {
                            label: "Sign up"
                        },

                        loginInputs: [
                            {
                                containerClass: 'RML-form-group',
                                label: 'Email',
                                type: 'email',
                                inputClass: 'RML-form-control',
                                id: 'email',
                                name: 'email',
                                placeholder: 'Email',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Password',
                                type: 'password',
                                inputClass: 'RML-form-control',
                                id: 'password',
                                name: 'password',
                                placeholder: 'Password',
                            }
                        ],
                        registerInputs: [
                            {
                                containerClass: 'RML-form-group',
                                label: 'Nickname',
                                type: 'text',
                                inputClass: 'RML-form-control',
                                id: 'login',
                                name: 'login',
                                placeholder: 'Nickname',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Email',
                                type: 'email',
                                inputClass: 'RML-form-control',
                                id: 'email',
                                name: 'email',
                                placeholder: 'Email',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Password',
                                type: 'password',
                                inputClass: 'RML-form-control',
                                id: 'password',
                                name: 'password',
                                placeholder: 'Password',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'age',
                                type: 'number',
                                inputClass: 'RML-form-control',
                                min: "1",
                                max: "100",
                                id: 'age',
                                name: 'age',
                                placeholder: 'Your age',
                            }
                        ],
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogDisabled: state.LoggedInUser.isLoggedIn
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: (url, data) => dispatch(createUserData(url, data)),
        fetchDataCheck: (url, data) => dispatch(checkUserData(url, data)),
        userLogOut: () => dispatch(logOutAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalLoginForm);