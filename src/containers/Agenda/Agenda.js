import React, { Component } from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
import RightSide from '../../components/RightSide/RightSide'
import classes from './Agenda.module.css';
import axios from 'axios'

class Agenda extends Component {
    constructor (props){
        super(props);
        this.state = {
            anotations : [],
            currentMonth: 'Janeiro',
            monthTotalDays: 31,
            date: 7,
            descInputValue : '',
            timeInputValue: '',
            year: 2020,
        }
        this.createNewAnotation = this.createNewAnotation.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTimeInputChange = this.handleTimeInputChange.bind(this);
        this.SelectCurrentDay = this.SelectCurrentDay.bind(this);
    }

    createNewAnotation = async (event) =>{
        event.preventDefault();
        const newAnotation = {
            year: this.state.year,
            month: this.state.currentMonth,
            day: this.state.date,
            description: this.state.descInputValue,
            time: this.state.timeInputValue
        }
        const anotationsCopy = this.state.anotations.slice();
        anotationsCopy.push(newAnotation)
        this.setState({
            anotations: anotationsCopy
        })
        let formData = new FormData();
        for (let key in newAnotation) {
            formData.append(key.toString(), newAnotation[key].toString())
        }
        try{
            await axios.post('http://192.168.0.9:8080/anotations/new', newAnotation);
        }
        catch (error){
            console.log(error);
        }
    }

    componentDidMount = async () => {
        await this.fetchData();
    }

    fetchData = async () => {
        try{
            let response = await axios.get(`http://192.168.0.9:8080/anotations?year=${this.state.year}&month=${this.state.currentMonth}&day=${this.state.date}`)
            let newAnotations = [];
            for (let anotation of response.data) {
                newAnotations.push(anotation)
            }
            this.setState({
                anotations: newAnotations
            })    
        } catch (error){
            console.log(error)
        }
    }

    SelectCurrentDay = async (day) => {
        await this.setState({
            date: parseInt(day.target.innerHTML)
        })
        await this.fetchData();
    }

    handleInputChange = (event) => {
        this.setState({
            descInputValue: event.target.value
        });
    }

    handleTimeInputChange = (event) => {
        this.setState({
            timeInputValue: event.target.value
        })
    }
    
    render(){
        return (
            <div className = {classes.AgendaContainer}>
                <LeftSide
                    anotations = {this.state.anotations}
                    currentMonth = {this.state.currentMonth}
                    monthTotalDays = {this.state.monthTotalDays}
                    createNewAnotation = {this.createNewAnotation}
                    inputHandler = {this.handleInputChange}
                    timeInputHandler = {this.handleTimeInputChange}
                    descInputValue = {this.state.descInputValue}
                    time = {this.state.timeInputValue}
                    selectDay = {this.SelectCurrentDay}
                    currentDay = {this.state.date}/>
                <div style = {{height: '100%', width: '8px', backgroundColor: '#E27171', marginRight: '7px'}}/>
                <div style = {{height: '100%', width: '8px', backgroundColor: '#E27171'}}/>
                <RightSide 
                    anotations = {this.state.anotations}
                    month = {this.state.currentMonth}
                    date = {this.state.date}/>
            </div>
        )
    }
}

export default Agenda;