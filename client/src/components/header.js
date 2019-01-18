import React, { Component } from "react";
import ModalLoginForm from "../components/modalLoginForm";
import UserNickName from "../components/userNickName";
import "../styles/header.css";
import CreateEvent from "../components/modalAddEvent";
import { connect } from "react-redux";
import { editEventForDownLoad } from "../tools";
import FileSaver from "file-saver";


class Header extends Component {

    makeFile = () => {
        const mapEvents = editEventForDownLoad(this.props.events);

        const fileName = "AllYourEvents.json";

        const fileToSave = new Blob([JSON.stringify(mapEvents)], {
            type: "application/json",
            name: fileName
        });

        FileSaver.saveAs(fileToSave, fileName);
    };

    render() {

        return (
            <div className="header shadow p-3 mb-5 bg-white rounded">
                <ModalLoginForm />
                {this.props.auth !== "Anonym" ? <CreateEvent /> : "" }
                <UserNickName />
                {this.props.auth !== "Anonym" ?
                    <button className="btn btn-primary" style={{ float: "right", marginRight: "7%"}}
                     onClick={this.makeFile}>
                        Export Your events
                    </button> : ""}
            </div>
        )
    }
}
const authorization = (state) => {
    return {
        events: state.showAllEvent,
        auth: state.LoggedInUser.user.name,
    }
}


export default connect(authorization)(Header);
