import React, { Component } from 'react';

export default class Shortcuts extends Component {
    toggleBodyClass() {
      document.body.classList.toggle('content-side-open');
    }

    render() {
        return (
            <div className="shortcuts">
                <a className="shortcut-item" onClick={this.toggleBodyClass.bind(this)}>
                    <i className="md-icon">menu</i>
                    <span>Menu</span>
                </a>
            </div>
        );
    }
}
