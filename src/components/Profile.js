import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="card1">
      <div className="card-body">
        <div className="profile">
          <div className="img">
            <img
              src="/images/MCD.jpg"
              className="rounded-circle avatar-lg img-thumbnail"
              alt="profile-image"
            />
          </div>
          <div>
            <h4>McDonald</h4>
          </div>
        </div>
        <div className="mt-3">
         

          <p className="text-muted mb-2 font-13">
            <strong>Full Name :</strong>{" "}
            <span className="ms-2">Geneva D. McKnight</span>
          </p>
          <p className="text-muted mb-2 font-13">
            <strong>Category :</strong> <span className="ms-2">Food</span>
          </p>
          <p className="text-muted mb-2 font-13">
            <strong>Mobile :</strong>
            <span className="ms-2">(123) 123 1234</span>
          </p>
          <p className="text-muted mb-2 font-13">
            <strong>Email :</strong>{" "}
            <span className="ms-2">user@email.domain</span>
          </p>
          <p className="text-muted mb-1 font-13">
            <strong>Location :</strong>{" "}
            <span className="ms-2">Mall of Amritsar</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
