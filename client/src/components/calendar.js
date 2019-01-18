import React, { Component } from "react"
import { connect } from "react-redux";
import "../styles/calendar.css"
import TimePart from "./calendarParts/timePart"
import EventPart from "./calendarParts/eventPart"
import TimePartTwo from "./calendarParts/timePartTwo";
import EventPartTwo from "./calendarParts/eventPartTwo";

import {
    createEventData,
    findAllUserEvents,
    saveModifiedEvents
} from "../actions/eventAction";
import { placeEventsInTwoColumns } from "../tools";


class Calendar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.user._id,
        }
    }

    componentDidUpdate() {
        if (this.state.userID !== this.props.user._id) {
            this.props.allUserEventsData('/ape/event/all', {
                userId: this.props.user._id
            });
            this.setState({
                userID: this.props.user._id
            })
        }
    }


    render(){

        this.props.modifiedEvents(placeEventsInTwoColumns(this.props.events))
        return(
            <div className="main-grid">   
                <TimePart />
                <EventPart />
                <TimePartTwo />
                <EventPartTwo />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.showAllEvent,
        user: state.LoggedInUser.user,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        eventCreateData: (url, data) => dispatch(createEventData(url, data)),
        allUserEventsData: (url, data) => dispatch(findAllUserEvents(url, data)),
        modifiedEvents: (data) => dispatch(saveModifiedEvents(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
