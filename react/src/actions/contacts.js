import * as types from './types';

export function fetchContacts() {
  return (dispatch) => {
    dispatch({
      type: types.FETCHING_CONTACTS
    });

    fetch('/data/contacts.json')
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: types.FETCHING_CONTACTS_SUCCESS,
          data: response.data,
          dataFetched: true,
          pagination: response.pagination
        });
      });
  }
}
