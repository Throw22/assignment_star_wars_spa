export function getSuccess(type) {
  return function(data) {
    return {
      type,
      data
    };
  };
}

export function getRequest(type) {
  return function() {
    return {
      type
    };
  };
}

export function getFailure(type) {
  return function(error) {
    return {
      type,
      error
    };
  };
}

export function getResource(type, getRequest, getSuccess, getFailure) {
  return function(page = 1) {
    return dispatch => {
      dispatch(getRequest());

      fetch(`http://swapi.co/api/${type}/?page=${page}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Response not ok');
          }
          return response.json();
        })
        .then(json => {
          dispatch(getSuccess(json));
        })
        .catch(error => {
          dispatch(getFailure(error));
        });
    };
  };
}
