import React from 'react'
import classes from './Calendar.module.css'

const calendar = (props) => {
    const weekRow = [[]];
    const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    let todayIs = 0;
    let currentWeek = 0
    let dayCreatorIterator = 1;
    let currentDay = props.currentDay;
    let totalDays = props.totalDays;

    while (totalDays > 0) {
        weekRow[currentWeek].push(
            (<span key = {dayCreatorIterator} className = {classes.DayContainer}>
                <li className = {currentDay === dayCreatorIterator? classes.Day + ' ' + classes.Active : classes.Day} 
                    onClick = {props.daySelector}> {dayCreatorIterator}</li>
            </span>))
        dayCreatorIterator ++;
        if ( weekDays[todayIs] === 'Sab'){
            currentWeek++;
            weekRow.push([])
            todayIs = -1;
        }
        todayIs++;
        totalDays --;
    }

    const weekRowPrinted = weekRow.map ((week, index) => {
        return (<div key = {index}> {week}</div>)
    })
   
    return (
        <div className = {classes.Calendar}>
            <div className = {classes.TitleContainer}>
                <div className={classes.MonthTitle}>
                    Janeiro
                </div>           
            </div>
            <div className = {classes.WeekDayContainer}>
                {weekDays.map( day => (<span key = {day}className = {classes.DayNames}> {day}</span>))}
            </div>
            <ul className = {classes.Weeks}>
                {weekRowPrinted}
            </ul>
        </div>
    )
}

export default calendar