import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Backend from '../Layouts/Backend';
import Infobox from '../UI/Infobox';
import Loading from '../Helpers/Loading';

import { actionCreators } from '../../actions';

class Members extends Component {
    componentWillMount() {
        this.props.dispatch(actionCreators.fetchMembers());
    }

    render() {
        let results = this.props.members.map((member) => {
            return <Infobox key={member.id} member={member} />
        });

        return (
            this.props.isFetching ? <Backend><div className="content-inner"><Loading /></div></Backend> :
                <Backend>
                    <div className="content-inner">
                        <div className="members">
                            {results}
                        </div>
                    </div>
                </Backend>
        );
    }
}

Members.propTypes = {
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool.isRequired,
    members: PropTypes.array.isRequired
};

export default connect((store) => {
    return {
        members: store.memberState.data,
        pagination: store.memberState.pagination,
        isFetching: store.memberState.isFetching
    };
})(Members)
