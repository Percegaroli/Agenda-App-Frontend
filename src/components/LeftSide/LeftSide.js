import React from 'react';
import AnotationCreator from './AnotationCreator/AnotationCreator';
import Calendar from '../Calendar/Calendar';
import classes from './LeftSide.module.css';


const leftSide = (props) => {
    return (
        <div className = {classes.LeftSide}>
            <Calendar 
                totalDays = {31}
                daySelector = {props.selectDay}
                currentDay = {props.currentDay}/>
            <AnotationCreator 
                clicked = {props.createNewAnotation}
                inputHandler = {props.inputHandler}
                inputValue = {props.inputValue}
                timeInputHandler = {props.timeInputHandler}
                time = {props.time}
                />
        </div>
    )
}

export default leftSide;