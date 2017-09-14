import React from'react';

const BadAlien = ({name, species}) => (
    <div>
        <h2>{name} ({species})</h2>
    </div>
);

BadAlien.propTypes = {
    name: PropTypes.string.isRequired,
    species: PropTypes
};

export default BadAlien;