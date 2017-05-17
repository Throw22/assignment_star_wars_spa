import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let resourceList = resource => {
  if (!resource.results) return null;
  return resource.results.map(individualResource => {
    let urlParse = individualResource.url.split('/');
    let id = urlParse[urlParse.length - 2];
    let resourceType = urlParse[urlParse.length - 3];
    let displayName = resourceType === "films" ? individualResource.title : individualResource.name;
    return (
      <Link key={displayName} to={`/resource/${resourceType}/${id}`}><p>{displayName}</p></Link>
    );
  });
};

const ResourceList = ({ resource, isFetching }) => {

  if (isFetching) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {resourceList(resource)}
    </div>
  );
};

ResourceList.propTypes = {
  resource: PropTypes.object.isRequired,
  isFetching: PropTypes.bool
};

export default ResourceList;
