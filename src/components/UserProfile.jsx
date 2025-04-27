import React from 'react';

const UserProfile = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <p>Role: Admin</p>
      <button className="mt-4 p-2 bg-blue-500 text-white rounded">
        Edit Profile
      </button>
    </div>
  );
};

export default UserProfile;