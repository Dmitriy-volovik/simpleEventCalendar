// import { debug } from "util";

const timeToInt = time => {
    const timeInArr = time.split(":").map(time => parseInt(time, 10));
    return timeToMinutes(timeInArr);
};

const timeToMinutes = time => {
    const hours = (time[0] - 8) * 60;
    const minutes = time[1];

    return hours + minutes;
};

export const getStartAndDuration = event => {
    // debugger;
    const { fromTime, tillTime } = event;
    const fromTimeInMinutes = timeToInt(fromTime);
    const tillTimeInMinutes = timeToInt(tillTime);

    return {
        start: fromTimeInMinutes,
        duration: tillTimeInMinutes - fromTimeInMinutes
    };
};

export const editEventForDownLoad = events =>{
    return events.map((event, i) =>{
        let parforDownLoad = getStartAndDuration(event);
        return {
            title: event.title,
            start: parforDownLoad.start,
            duration: parforDownLoad.duration
        }
    })
}

export const placeEventsInTwoColumns = events => {
    debugger;

    if (events.length > 0){
        let leftColumn = [];
        let rightColumn = [];
        events.forEach(event => {
            let parsAgain = getStartAndDuration(event);
            console.log(parsAgain);

            if (parsAgain.start <= 270 && parsAgain.start + parsAgain.duration < 270) {
                event.start = parsAgain.start;
                event.duration = parsAgain.duration;
                leftColumn.push(event);
            }
            if (event.start > 270) {
                let cloneOf = Object.assign({}, event)
                cloneOf.start -= 270;
                rightColumn.push(cloneOf);
            }
            if (parsAgain.start <= 270 && parsAgain.start + parsAgain.duration >= 270) {
                event.start = parsAgain.start;
                event.duration = parsAgain.duration;
                let cloneOfEvent = Object.assign({}, event)
                event.duration = Math.abs(270 - event.start);
                leftColumn.push(event);
                cloneOfEvent.start = 0;
                cloneOfEvent.duration -= event.duration;
                rightColumn.push(cloneOfEvent);
            }


            // if (event.start <= 270 && event.start + event.duration < 270) {
            //     leftColumn.push(event);
            // }
            // if (event.start > 270) {
            //     let cloneOf = Object.assign({}, event)
            //     cloneOf.start -= 270;
            //     rightColumn.push(cloneOf);
            // }
            // if (event.start <= 270 && event.start + event.duration >= 270) {

            //     let cloneOfEvent = Object.assign({}, event)
            //     event.duration = Math.abs(270 - event.start);
            //     leftColumn.push(event);
            //     cloneOfEvent.start = 0;
            //     cloneOfEvent.duration -= event.duration;
            //     rightColumn.push(cloneOfEvent);
            // }
        });

        return [leftColumn, rightColumn];
    } else{
        return [];
    }

};


                // let copy = JSON.parse(JSON.stringify(event));
                // let copy2 = JSON.parse(JSON.stringify(event));
                // copy.duration = Math.abs(270 - event.start);
                // leftColumn.push(copy);
                // copy2.start = 0;
                // copy2.duration = copy.duration - event.duration;
                // rightColumn.push(copy2);