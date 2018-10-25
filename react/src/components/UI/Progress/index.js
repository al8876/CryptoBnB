import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Progress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: props.size,
            description: props.description
        }
    }

    render() {
        return (
            <div className="progress-wrapper">
                {this.props.showStatus ?
                    <div className="progress-status">{this.state.size}%</div> : ''}

                <div className="progress-content">
                    <div className="progress">
                        <div className="progress-inner" style={{width: this.state.size + '%'}} />
                    </div>

                    {this.state.description ?
                        <a className="progress-description">
                            {this.state.description}
                            <i className="md-icon">arrow_forward</i>
                        </a> : ''}
                </div>
            </div>
        );
    }
}

Progress.propTypes = {
    size: PropTypes.number.isRequired,
    showStatus: PropTypes.bool,
    description: PropTypes.string
}

export class ProgressWrapper extends Component {
    render() {
        return (
            <div className="progress-grid">
                {this.props.children}
            </div>
        )
    }
}

ProgressWrapper.propTypes = {
    children: PropTypes.node.isRequired
}
