import React, { Component } from 'react';
import axios from 'axios';

class AdminEvents extends Component {
    constructor() {
        super();
        this.state = {
            event_name: "",
            event_startDate: "",
            event_endDate: "",
            event_details: "",
            event_link: "",
            event_image: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitEvent = (event) => {
        event.preventDefault();
        console.log(`event_name: ${this.state.event_name},
            event_startDate: ${this.state.event_startDate},
            event_endDate: ${this.state.event_endDate},
            event_details: ${this.state.event_details},
            event_link: ${this.state.event_link},
            event_image: ${this.state.event_image}`)
        // axios.post(`${process.env.REACT_APP_HOSTNAME}/api/events`, {
        //     event_name: this.state.event_name,
        //     event_startDate: this.state.event_startDate,
        //     event_endDate: this.state.event_endDate,
        //     event_details: this.state.event_details,
        //     event_link: this.state.event_link,
        //     event_image: this.state.event_image
        // })

    }

    render() {
        return (
            <div>
                <h1>events posting page</h1>
                <form id="eventForm">
                    <div>
                        <p>Event Name:</p><input type="text" name="event_name" placeholder="Event Name" value={this.state.event_name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>Date Start:</p><input type="text" name="event_startDate" placeholder="Start Date" value={this.state.event_startDate} onChange={this.handleChange} />
                        <p>Date End:</p><input type="text" name="event_endDate" placeholder="End Date" value={this.state.event_endDate} onChange={this.handleChange} />
                    </div>
                    <p>Event Discription:</p>
                    <textarea rows="10" cols="30" name="event_details" placeholder="Details about event..." value={this.state.event_details} onChange={this.handleChange} />
                    <div>
                        <p>Event Link:</p><input type="text" name="event_link" placeholder="https://www.example.com" value={this.state.event_link} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>Image Link:</p><input type="text" name="event_image" placeholder="https://www.pictures.com/funny_image.png" value={this.state.event_image} onChange={this.handleChange} />
                    </div>
                    <button type="submit" value="submit" onClick={this.submitEvent}>Submit</button>
                </form>
            </div>
        );
    }
}

export default AdminEvents;
