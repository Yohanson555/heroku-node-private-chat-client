import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input } from 'antd';
import { Actions } from '../actions';

const { sendMessage } = Actions;

const { Search } = Input;

class Form extends Component {
    constructor() {
        super();

        this.state = {
            message: null
        };
    }

    onChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    onSend() {
        const { message } = this.state;

        this.props.sendMessage(message);

        this.setState({
            message: null
        });
    }

    render() {
        const { message } = this.state;
        
        return (
            <Search
                value={message}
                placeholder="input your message here"
                enterButton="Send"
                size="large"
                onChange={value => this.onChange(value)}
                onSearch={value => this.onSend()}
            />
        );
    }
}

export default connect(null, { sendMessage })(Form);

