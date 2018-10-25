import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter, matchPath, NavLink } from 'react-router-dom';
import { routes } from '../../routes';

class Breadcrumbs extends Component {
    getPaths(pathname) {
        const paths = ['/'];

        if (pathname === '/') return paths;

        pathname.split('/').reduce((prev, curr) => {
            const currPath = `${prev}/${curr}`;

            paths.push(currPath);
            return currPath;
        });

        return paths;
    }

    render() {
        const paths = this.getPaths(this.props.location.pathname);

        const breadcrumbs = paths.map((path, index) => {
            for (let route of routes) {
                if (matchPath(path, route)) {
                    return (
                        <li key={index}>
                            {route.breadcrumb_link ?
                                <NavLink to={route.path}>
                                    {route.breadcrumb ? route.breadcrumb : route.title}
                                </NavLink> : <span>{route.breadcrumb ? route.breadcrumb : route.title}</span>}
                        </li>
                    );
                }
            }

            return null;
        });


        return (
            breadcrumbs ?  <ul className="breadcrumbs">{breadcrumbs}</ul> : ''
        );
    }
}

Breadcrumbs.propTypes = {
    location: PropTypes.object.isRequired
}

export default withRouter(Breadcrumbs);
