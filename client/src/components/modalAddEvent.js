import React, { Component } from "react"
import "../styles/createEvent.css";
import Modal from 'react-modal';
import { connect } from "react-redux";
import {
    createEventData, saveModifiedEvents
    } from "../actions/eventAction";
import { getStartAndDuration } from "../tools";


Modal.setAppElement('#root')

class CreateEvent extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    submitHandler = () => {
        const timeParse = getStartAndDuration({ 
            fromTime: this.fromTime.value,
            tillTime: this.tillTime.value
        });
        this.props.eventCreateData('/ape/event/add', {
            title: this.title.value,
            fromTime: this.fromTime.value,
            tillTime: this.tillTime.value,
            start: timeParse.start,
            duration: timeParse.duration,
            _user: this.props.user._id
        });
        this.closeModal();

    }

    render() {
        return (
            <div className="main-button-div">
                <button className="btn btn-primary" style={{marginLeft: "400px"}} onClick={this.openModal}>Add Event</button>
                
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    shouldCloseOnOverlayClick={false}
                    className="main-block"
                    contentLabel="Example Modal"
                >
                    <button className="close-button btn btn-danger btn-sm" onClick={this.closeModal}>close</button>
                    <h2 className="h2-style" >Enter data to create an event</h2>
                    <div></div>
                    <form className="add-event" onSubmit={this.submitHandler} >
                        <input type="text" placeholder='title' required minlength="1" maxlength="100" 
                            ref={title => this.title = title} /><br />
                        <label for="from">From </label>
                        <input type="time" placeholder='fromTime' min="08:00" max="17:00" required
                            ref={ft => this.fromTime = ft} name="from" /><br />
                        <label for="till">Till </label>
                        <input type="time" placeholder='tillTime' min="08:00" max="17:00" required
                            ref={tt => this.tillTime = tt} name="till" /><br />
                        <button type="submit" className="knopka btn btn-primary"  >Save</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.LoggedInUser.user,
    };
}
const mapDispatchToProps = dispatch =>  {
    return {
        eventCreateData: (url, data) => dispatch(createEventData(url, data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);