import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter, matchPath } from 'react-router-dom';
import Breadcrumbs from '../Helpers/Breadcrumbs';
import Shortcuts from '../UI/Shortcut';
import { routes } from '../../routes';

class PageTitle extends Component {
    findTitle() {
        for (let route of routes) {
            if (matchPath(this.props.location.pathname, route)) {
                return route.title;
            }
        }

        return null;
    }

    render() {
        return (
            <div className="page-title">
                <Breadcrumbs/>

                <h1>{this.findTitle()}</h1>

                <Shortcuts/>
            </div>
        );
    }
}

PageTitle.propTypes = {
    location: PropTypes.object.isRequired
}

export default withRouter(PageTitle);
