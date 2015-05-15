import React from 'react';
import moment from 'moment';

function getAppState() {
    return {
        time: moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
    };
}

let Clock = React.createClass({
    getInitialState: () => getAppState(),

    componentDidMount: function () {
        setInterval(() => this.setState(getAppState()), 1000);
    },

    render: function () {
        return (
            <div>{this.state.time}</div>
        );
    }
});

export default Clock;
