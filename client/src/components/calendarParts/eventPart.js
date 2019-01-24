import React, { Component } from "react"
import { connect } from "react-redux";
import "../../styles/eventPartCalendar.css"
import GridEventPartOne from "./gridEventPart1";

class EventPart extends Component {

    render() {

        return (
            <div className="eventPart-1">
                <div className>
                    {this.props.events.length > 0 ? 
                        <GridEventPartOne elements={this.props.events[0]} columnsCount={this.props.events[0].length}/> 
                    : ""}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        eventsBeforeMod: state.showAllEvent,
        events: state.modifiedEvent
    }
}

export default connect(mapStateToProps)(EventPart);