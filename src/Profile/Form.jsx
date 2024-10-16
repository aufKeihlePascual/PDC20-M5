import React, { useState } from "react";

function Form({user, onUpdate}){
    const [formData, setFormData] = useState({name: user.name, email: user.email, username: user.username});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
      <div className="card mb-3">
          <div className="card-body">
              <h5 className="card-title">Update Profile</h5>
              <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label className="form-label">Name:</label>
                      <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Email:</label>
                      <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Username:</label>
                      <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">Update Profile</button>
              </form>
          </div>
      </div>
    );
}

export default Form;
