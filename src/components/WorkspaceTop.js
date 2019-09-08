import React, { Component } from 'react';
import { connect } from 'react-redux';

class WorkspaceTop extends Component {
    render() {
        return (
            <span> Workspace name </span>
        );
    }
}

const mapStateToProps = (state) => {
    const { workspaces, currentWorkspace } = state.chat;

    return { workspaces, currentWorkspace };
};

export default connect(mapStateToProps, null)(WorkspaceTop);