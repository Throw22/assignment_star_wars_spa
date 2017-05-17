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

export function getResource(type, page = 1) {
  return dispatch => {
    //check for what kind of type, dispatch that type of request/success/failure?
    fetch(`http://swapi.co/api/${type}/?page=${page}`);
  };
}
