import React from "react";
import PropTypes from 'prop-types';

function Profile({user: {name, email, username}}){
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">{email}</p>
                <p className="card-text">{username}</p>
            </div>
        </div>
    );
}

Profile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    }).isRequired
};

export default Profile;
