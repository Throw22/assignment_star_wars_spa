import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let resourceList = resource => {
  if (!resource.results) return null;
  return resource.results.map(individualResource => {
    let id = individualResource.url.split('/')[-2];
    let resourceType = individualResource.url.split('/')[-3];
    let displayName = resourceType === "film" ? individualResource.title : individualResource.name;
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
