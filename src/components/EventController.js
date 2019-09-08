import { Component } from 'react';
import { connect } from 'react-redux';

import Keypress from 'react-keypress';
import { Actions } from '../actions';

class Root extends Component {
    componentDidMount() {
        window.addEventListener('keydown', Keypress("enter",() => {
            this.enterPressed();
        }));

        window.addEventListener('keydown', Keypress("esc",() => {
            this.escPressed();
        }));
    }

    enterPressed() {
        console.log('Enter pressed');
    }

    escPressed() {
        console.log('Esc pressed');
    }

    render() {
        return this.props.children;
    }
}

const mapStateToProps = (state) => {
    //todo

    return {}
};

export default connect(mapStateToProps, { Actions })(Root);