import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import { GET_MEMBERS, DELETE_MEMBER, ADD_MEMBER } from './actionTypes';

// GET MEMBERS
export const getMembers = () => dispatch => {
  axios
    .get('/api/members/')
    .then(res => {
      dispatch({
        type: GET_MEMBERS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE MEMBER
export const deleteMember = (id) => dispatch => {
  axios
    .delete(`/api/members/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteMember: "Member Deleted"}));
      dispatch({
        type: DELETE_MEMBER,
        payload: id
      });
    }).catch(err => console.log(err));
};

// ADD MEMBER
export const addMember = (member) => dispatch => {
  axios
    .post("/api/members/", member)
    .then(res => {
      dispatch(createMessage({ addMember: "Member Added"}));
      dispatch({
        type: ADD_MEMBER,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};