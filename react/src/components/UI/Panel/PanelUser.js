import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PanelUser extends Component {
    toggleBodyClass() {
        document.body.classList.toggle('content-side-open');
    }

    render() {
        return(
            <div className="panel-user">
                {this.props.image ? <div className="panel-user-avatar" style={{
                    backgroundImage: 'url(' + this.props.image + ')'
                }}></div> : ''}

                <div className="panel-user-content">
                    {this.props.name ? <div className="panel-user-name">{this.props.name}</div> : ''}

                    {this.props.subtitle ? <div className="panel-user-subtitle">{this.props.subtitle}</div> : ''}

                    <div className="panel-user-action" onClick={this.toggleBodyClass.bind(this)}>
                        <i className="md-icon">close</i>
                    </div>
                </div>
            </div>
        );
    }
}

PanelUser.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    subtitle: PropTypes.string,
}
