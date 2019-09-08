import React, { Component } from 'react';
import EventController from './EventController';

import Main from './Main';

class Root extends Component {
    render() {
        return (
            <EventController>
                <Main />
            </EventController>
        );
    }
}

export default Root;