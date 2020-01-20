import React from 'react';
import classes from './AnotationCreator.module.css';

const anotationCreator = (props) => {
    return (
        <div className = {classes.NewAnotationContainer}>
            <label>Horário:
                <div>
                    <input 
                        type="text" 
                        className = {classes.AnotationInput + ' ' + classes.TimeInput} 
                        name = "times"
                        placeholder = "14:42"
                        onChange = {props.timeInputHandler}
                        value = {props.time}/>
                </div>
            </label>
            <label>Descrição:
                <div>
                    <input 
                        type="text" 
                        className = {classes.AnotationInput + ' ' + classes.DescriptionInput} 
                        name = "description"
                        onChange = {props.inputHandler}
                        value = {props.inputValue}/>
                </div>
            </label>
            <button 
                type="submit" 
                className = {classes.AnotationSubmit} 
                onClick = {props.clicked}>MARCAR NA AGENDA!</button>
        </div>
    )
}

export default anotationCreator;