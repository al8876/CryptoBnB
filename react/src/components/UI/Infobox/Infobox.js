import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button';

export default class Infobox extends Component {
    render() {
        let projects = this.props.member.projects.map((project, index, {length}) => {
            let after = '';

            if (length !== index + 1) {
                after = ', ';
            }

            return project + after;
        });

        return (
            <div className="infobox">
                <div className="infobox-inner">
                    <div className="infobox-header">
                        <div className="infobox-header-avatar">
                            <span style={{backgroundImage: 'url(' + this.props.member.avatar + ')'}}></span>
                        </div>

                        <div className="infobox-header-content">
                            <h3>{this.props.member.name}</h3>
                            <h4>{this.props.member.position}</h4>
                        </div>

                        <div className="infobox-header-action">
                            <Button classes="button-default">Contact</Button>
                        </div>
                    </div>

                    <div className="infobox-content">
                        <ul className="infobox-content-properties">
                            <li>
                                <span>Tasks:</span> <strong>{this.props.member.tasks.unresolved} unresolved, {this.props.member.tasks.pending} pending</strong>
                            </li>

                            <li>
                                <span>Projects:</span> <strong>{projects}</strong>
                            </li>
                        </ul>

                        <p>
                            {this.props.member.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

Infobox.propTypes = {
    member: PropTypes.object.isRequired
};
