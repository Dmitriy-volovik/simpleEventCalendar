import React, { Component } from "react"
import "../../styles/timePartCalendar.css"
import GridTimePartOne from "./gridTimePart1";


class TimePartTwo extends Component {
    render() {
        const time_second = [
            "12:30",
            "1:00",
            "1:30",
            "2:00",
            "2:30",
            "3:00",
            "3:30",
            "4:00",
            "4:30",
            "5:00"
        ];
        return (
            <div className="timePart-1" >
                <GridTimePartOne time={time_second} />
            </div>
        )
    }
}

export default TimePartTwo;