import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="filter form-inline">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search in results" />
                    </div>

                    <div className="form-group form-group-description">
                        Displaying 7 items matching your criteria.
                    </div>
                </form>
            </div>
        );
    }
}
