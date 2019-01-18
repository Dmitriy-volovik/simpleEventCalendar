import React, { Component } from "react"
import { connect } from "react-redux";
import "../../styles/eventPartCalendar.css"
import GridEventPartOne from "./gridEventPart1";

// import { placeEventsInTwoColumns } from "../../tools";
// import { saveModifiedEvents } from "../../actions/eventAction";


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
// const mapDispatchToProps = dispatch => {
//     return {

//         modifiedEvents: (data) => dispatch(saveModifiedEvents(data))
//     };
// }
// export const countColumn = events[0].length;

export default connect(mapStateToProps)(EventPart);