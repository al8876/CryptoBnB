import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Backend from '../Layouts/Backend';
import { Button } from '../UI/Button';
import Loading from '../Helpers/Loading';

import { actionCreators } from '../../actions';

class Tasks extends Component {
    componentWillMount() {
        this.props.dispatch(actionCreators.fetchTasks());
    }

    render() {
        let results = this.props.tasks.map((group) => {
            let result = [];

            result.push(<TaskHeader key={group.header.type} header={group.header} />);
            result.push(group.data.map((task) => {
                return <Task key={task.id} task={task} />
            }));

            return result;
        });

        return (
            this.props.isFetching ? <Backend><div className="content-inner"><Loading /></div></Backend> :
            <Backend>
                <div className="content-inner">
                    <div className="table-responsive">
                        <table>
                            <tbody>
                                {results}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Backend>
        );
    }
}

Tasks.propTypes = {
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool.isRequired,
    tasks: PropTypes.array.isRequired
};

class TaskHeader extends Component {
    render() {
        return (
            <tr className="heading">
                <td colSpan={5}>{this.props.header.title}</td>
            </tr>
        )
    }
}

TaskHeader.propTypes = {
    header: PropTypes.object.isRequired
}

class Task extends Component {
    render() {
        return (
            <tr>
                <td className="min-width">
                    <div className={'status ' + this.props.task.type}>
                        <i className="md-icon">check</i>
                    </div>

                    <div className="title-wrapper">
                        <div className="title">{this.props.task.title}</div>
                        <div className="subtitle">{this.props.task.project_title}</div>
                    </div>
                </td>

                <td>
                    <div className="avatar" style={{backgroundImage: 'url(' + this.props.task.user_avatar  + ')'}}/>
                    <div className="title-wrapper">
                        <div className="title">{this.props.task.user_name}</div>
                    </div>
                </td>

                <td>
                    <div className="key-value">
                        <span>Issued</span>
                        <strong>{this.props.task.issued}</strong>
                    </div>
                </td>

                <td>
                    <div className="key-value">
                        <span>Due to</span>
                        <strong>{this.props.task.due}</strong>
                    </div>
                </td>

                <td className="actions min-width">
                    <div className="button-group">
                        <Button to="#">Edit</Button>
                        <Button to="#" classes="danger">Delete</Button>
                    </div>
                </td>
            </tr>
        );
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default connect((store) => {
    return {
        tasks: store.taskState.data,
        pagination: store.taskState.pagination,
        isFetching: store.taskState.isFetching
  };
})(Tasks)
