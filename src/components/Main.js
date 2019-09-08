import React, { Component } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Workspace from './Workspace';

class Main extends Component {
    render() {
        return (
            <Layout className="app-layout">
                <Layout>
                    <Sidebar />
                    <Workspace />
                </Layout>
            </Layout>
        );
    }
}

export default Main;