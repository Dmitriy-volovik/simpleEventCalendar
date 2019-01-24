import React, { Component } from "react"
import "../styles/createEvent.css";
import "../styles/editEvent.css";
import Modal from 'react-modal';
import { connect } from "react-redux";
import {
    updateEventData,
    deleteEventData
} from "../actions/eventAction";
import { getStartAndDuration } from "../tools";


Modal.setAppElement('#root')

class EditEvent extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            singleEvent : "",
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        this.title.value = this.props.event.title;
        this.fromTime.value = this.props.event.fromTime;
        this.tillTime.value = this.props.event.tillTime;
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    submitHandler = () => {
        
        const timeParse = getStartAndDuration({
            fromTime: this.fromTime.value,
            tillTime: this.tillTime.value
        });
            this.props.eventUpdateData('/ape/event/update', {
            title: this.title.value,
            fromTime: this.fromTime.value,
            tillTime: this.tillTime.value,
            start: timeParse.start,
            duration: timeParse.duration,
            _user: this.props.user._id,
            _id: this.props.event._id,
        });

        this.closeModal();
    }

    deleteHandler = () =>{
        this.props.eventDeleteData('/ape/event/delete', {
            _id: this.props.event._id,
            _user: this.props.user._id
        });

        this.closeModal();
    }

    render() {
        const singleEvent1 = this.props.event;
        return (
            <div className="main-edit-div" > 
                <p onClick={this.openModal}> 
                    <span className="text" >{singleEvent1.title}</span>
                </p>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    shouldCloseOnOverlayClick={false}
                    className="main-block"

                    contentLabel="Example Modal"
                >
                    <button className="close-button btn btn-danger btn-sm" onClick={this.closeModal}>close</button>
                    <h2 className="h2-style" >Enter data to edit an event</h2>
                    <div></div>
                    <form className="add-event" >
                        <input placeholder="title" type="text"
                            ref={title => this.title = title} required/><br />
                        <label for="from">From </label>
                        <input type="time" id="from" min="08:00" max="17:00" required
                            ref={ft => this.fromTime = ft} name="from" step="300" /><br />
                        <label for="till">Till </label>
                        <input type="time" min="08:00" max="17:00" required
                            ref={tt => this.tillTime = tt} name="till" step="300" /><br />
                        <button type="submit" name="save" className="knopka btn btn-primary"  
                            onClick={this.submitHandler}
                        >Save</button>
                        <button type="submit" name="delete" className="knopka btn btn-primary" 
                            onClick={this.deleteHandler}
                        >Delete</button>
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
const mapDispatchToProps = dispatch => {
    return {
        eventUpdateData: (url, data) => dispatch(updateEventData(url, data)),
        eventDeleteData: (url, id) => dispatch(deleteEventData(url, id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);