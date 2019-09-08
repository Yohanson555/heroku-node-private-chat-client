import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
    }

    onCollapse(collapsed) {
        this.setState({ collapsed });
    };

    renderMenu() {
        return (
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Settings</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                </Menu.Item>

                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="team" />
                            <span>Workspaces</span>
                        </span>
                    }
                >
                    <Menu.Item key="6">Workspace 1</Menu.Item>
                    <Menu.Item key="8">Workspace 2</Menu.Item>
                </SubMenu>

                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="user" />
                            <span>Users</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }

    renderLogo() {
        const { logo } = this.props;

        if (logo) {
            return (
                <div className="app-sidebar-logo">
                    <img src={logo} alt="Logo" />
                </div>
            );
        }
        return (<div className="app-sidebar-logo" />);
    }

    render() {
        return (
            <Layout.Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse.bind(this)}
            >
                {this.renderLogo()}
                {this.renderMenu()}
            </Layout.Sider>
        );
    }
}

const mapStateToProps = (state) => {
    const { logo } = state.settings;

    return { logo };
};

export default connect(null, null)(Sidebar);

