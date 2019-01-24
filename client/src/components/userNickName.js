import React, { Component } from "react";
import { connect } from 'react-redux';
import "../styles/UserNickName.css";

class UserNickName extends Component {

    render() {
        return (
            <div className="user-avatar" >
                {this.props.userNameLog === "Anonym" ? <p>You are sign Out</p> : <h3>{this.props.userNameLog}</h3>}
            </div>
        )
    }
}
export default connect(s => ({ userNameLog: s.LoggedInUser.user.name }))(UserNickName)