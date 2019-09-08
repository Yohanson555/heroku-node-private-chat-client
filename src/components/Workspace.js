import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Form from './Form';
import Chat from './Chat';
import WorkspaceTop from './WorkspaceTop';

const { Content, Footer, Header } = Layout;

class Workspace extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <WorkspaceTop />
                </Header>
                

                <Content>
                    <Chat />
                </Content>

                <Footer>
                    <Form />
                </Footer>
            </Layout>
        );
    }
}

export default connect(null, null)(Workspace);

