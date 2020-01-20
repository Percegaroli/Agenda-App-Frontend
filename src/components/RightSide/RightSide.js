import React from 'react';
import classes from './RightSide.module.css';

const RightSide = (props) => {
    let anotations = null;
    if (props.anotations instanceof Array && props.anotations.length !== 0){
        anotations = props.anotations.map( (anotation) => {
            return (
                <li key = {anotation.time}>
                    <div className = {classes.ItemIcon} />
                    {anotation.time} - {anotation.description}
                </li>
            )
        })
    }
    return (
        <div className = {classes.RightContainer}>
            <h2 className = {classes.Title}>Agenda - Dia {props.date} de {props.month}</h2>
            <ul>
                {anotations}
            </ul>
        </div>
    )
}

export default RightSide