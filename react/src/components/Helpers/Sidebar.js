import React, { Component } from 'react';

import Navigation from './Navigation';
import SidebarTitle from './SidebarTitle';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <SidebarTitle/>

                <Navigation/>
            </div>
        );
    }
}
