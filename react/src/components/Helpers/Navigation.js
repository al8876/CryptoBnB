import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return(
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/" exact={true} activeClassName="active">
                             <i className="md-icon">dashboard</i> <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/headquarters" activeClassName="active">
                            <i className="md-icon">view_column</i> <span>Headquarters</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacts" activeClassName="active">
                            <i className="md-icon">perm_identity</i> <span>Contacts</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/invoice" activeClassName="active">
                            <i className="md-icon">picture_as_pdf</i> <span>Invoice</span>
                            <strong>3</strong>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/projects" activeClassName="active">
                            <i className="md-icon">folder_open</i> <span>Projects</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/members" activeClassName="active">
                            <i className="md-icon">people_outline</i> <span>Members</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/tasks" activeClassName="active">
                            <i className="md-icon">done_all</i> <span>Tasks</span>
                        </NavLink>
                    </li>
                </ul>

                <strong>Additional Links</strong>

                <ul>
                    <li>
                        <NavLink to="/login" activeClassName="active">
                            <i className="md-icon">arrow_forward</i> <span>Login</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/icons" activeClassName="active">
                            <i className="md-icon">grid_on</i> <span>Icons</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/forms" activeClassName="active">
                            <i className="md-icon">input</i> <span>Forms</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
