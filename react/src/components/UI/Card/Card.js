import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
    getClasses() {
        if (this.props.image) {
            return 'card has-image';
        }

        return 'card';
    }

    getStyles() {
        if (this.props.image) {
            return {
                backgroundImage: 'url(' + this.props.image + ')'
            };
        }

        return {};
    }

    render() {
        return (
            <div className={this.getClasses()}>

                <div className="card-close"><i className="md-icon">close</i></div>

                {this.props.filetype ? <div className="card-filetype"><i className="md-icon">{this.props.filetype}</i></div>: ''}

                {this.props.image ? <div className="card-image" style={this.getStyles()}></div> : ''}

                <div className="card-content">
                    {this.props.date ? <div className="card-date">{this.props.date}</div> : ''}
                    {this.props.title ? <div className="card-title">{this.props.title}</div> : ''}
                    {this.props.subtitle ? <div className="card-subtitle">{this.props.subtitle}</div> : ''}
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    filetype: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export class CardsWrapper extends Component {
    render() {
        return(
            <div className="cards-wrapper">
                {this.props.children}
            </div>
        );
    }
}

CardsWrapper.propTypes = {
    children: PropTypes.node.isRequired
};
