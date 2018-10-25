import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Box extends Component {
    render() {
        return(
            <div className={this.props.classes ? this.props.classes + ' box' : 'box'}>
                {this.props.title ? <h3>{this.props.title}</h3> : ''}

                {this.props.children}
            </div>
        );
    }
}

Box.propTypes = {
    classes: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};
