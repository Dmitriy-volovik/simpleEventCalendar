import React, { Component } from "react"
import { connect } from "react-redux";
import "../../styles/eventPartCalendar.css"
// import GridEventPartTwo from "./gridEventPart2";
import GridEventPartOne from "./gridEventPart1";

class EventPartTwo extends Component {
    render() {
        return (
            <div className="eventPart-1">
                <div className>
                    {this.props.events.length > 0 ?
                        <GridEventPartOne elements={this.props.events[1]} columnsCount={this.props.events[1].length} /> 
                        : ""}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        events1: state.showAllEvent,
        events: state.modifiedEvent
    }
}

export default connect(mapStateToProps)(EventPartTwo);