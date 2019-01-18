import React, { Component } from "react"
import "../../styles/timePartCalendar.css"
import GridTimePartOne from "./gridTimePart1";


class TimePart extends Component {
    render() {
        const time_first = [
            "8:00",
            "8:30",
            "9:00",
            "9:30",
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30"
        ];
        return (
            <div className="timePart-1">
                <GridTimePartOne time={time_first} />
            </div>
        )
    }
}

export default TimePart;