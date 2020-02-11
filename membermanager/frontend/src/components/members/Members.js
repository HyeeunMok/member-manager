import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMembers, deleteMember } from '../../actions/members';

class Members extends Component {
  static propTypes = {
    members: PropTypes.array.isRequired,
    getMembers: PropTypes.func.isRequired,
    deleteMember: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getMembers();
  }

  render() {
    return (
      <Fragment>
        <h2>Members</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { this.props.members.map(member => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.message}</td>
                <td>
                  <button onClick={this.props.deleteMember.bind(this, member.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members.members
});

export default connect(mapStateToProps, { getMembers, deleteMember })(Members);