import React, { Component } from 'react';

export default class SidebarTitle extends Component {
    toggleBodyClass() {
        document.body.classList.toggle('sidebar-title-content-open');
    }

    render() {
        return (
            <h1 className="sidebar-title-wrapper">
                <div className="sidebar-title-inner" onClick={this.toggleBodyClass.bind(this)}>
                    <div className="sidebar-subtitle">Switch User Account</div>
                    <div className="sidebar-title">System Admin</div>

                    <div className="sidebar-action">
                        <i className="md-icon">arrow_drop_down</i>
                    </div>
                </div>

                <div className="sidebar-title-content">
                    <div className="sidebar-title-content-label">
                        Switch Company Account
                    </div>

                    <div className="sidebar-title-content-body">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search Company"/>
                            </div>
                        </form>

                        <ul>
                            <li>Leath Furniture</li>
                            <li>Grade A Investment</li>
                            <li>Desmonds Formal Wear</li>
                            <li>Dun Rite Lawn Maintenance</li>
                            <li>Red Robin Stores</li>
                            <li>Gino's Hamburgers</li>
                            <li>Wholesale Club, Inc.</li>
                        </ul>

                        <div className="sidebar-title-content-body-more">
                            Show All Companies
                        </div>
                    </div>
                </div>
            </h1>
        );
    }
}
