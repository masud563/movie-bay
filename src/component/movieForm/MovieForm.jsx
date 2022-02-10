import React from 'react';

const MovieForm = (props) => {
  return (
    <div>
      <h1>Movie Form - {props.match.params.id} </h1>
    </div>
  );
};

export default MovieForm;