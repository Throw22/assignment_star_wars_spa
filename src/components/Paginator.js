import React from 'react';
import { Link } from 'react-router-dom';

const Paginator = ({ resource, match }) => {
  const resourceType = match.params.resourceType;
  const count = resource.count;
  const pages = Math.ceil(count / 10);
  let pageArr = [];
  for (let i = 1; i <= pages; i++) {
    pageArr.push(i);
  }

  const pageLinks = pageArr.map(function(page) {
    return <Link to={`/resource/${resourceType}/?page=${page}`}>{page}</Link>;
  });

  return (
    <div>
      {pageLinks}
    </div>
  );
};

export default Paginator;
