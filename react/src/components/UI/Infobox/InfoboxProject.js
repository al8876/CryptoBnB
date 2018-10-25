import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button';

export default class InfoboxProject extends Component {
    render() {
        return (
            <div className="infobox">
                <div className="infobox-inner">
                    <div className="infobox-header">
                        <div className="infobox-header-content">
                            <h3>{this.props.project.name}</h3>
                            <h4>{this.props.project.client_name}</h4>
                        </div>

                        <div className="infobox-header-action">
                            <Button classes="button-default">View Tasks</Button>
                        </div>
                    </div>

                    <div className="infobox-meta">
                        <ul>
                            <li>
                                <span>Tasks</span>
                                <strong>{this.props.project.tasks}</strong>
                            </li>

                            <li>
                                <span>Progress</span>
                                <strong>{this.props.project.progress}</strong>
                            </li>

                            <li>
                                <span>Due</span>
                                <strong>{this.props.project.due}</strong>
                            </li>
                        </ul>
                    </div>

                    <div className="infobox-content">
                        <div className="infobox-content-avatars">
                            <strong>Members:</strong>

                            <ul>
                                <li>
                                    <span style={{backgroundImage: 'url(/img/tmp/user-1.jpg)'}}></span>
                                </li>

                                <li>
                                    <span style={{backgroundImage: 'url(/img/tmp/user-2.jpg)'}}></span>
                                </li>

                                <li>
                                    <span style={{backgroundImage: 'url(/img/tmp/user-3.jpg)'}}></span>
                                </li>

                                <li>
                                    <span style={{backgroundImage: 'url(/img/tmp/user-4.jpg)'}}></span>
                                </li>

                                <li>
                                    <span style={{backgroundImage: 'url(/img/tmp/user-5.jpg)'}}></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

InfoboxProject.propTypes = {
    project: PropTypes.object.isRequired
};
