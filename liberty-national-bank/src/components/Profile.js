import React from 'react';
import { auth } from '../firebase';

const Profile = () => {
  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-2xl font-bold text-center">Profile</h2>
      <div className="max-w-md mx-auto mt-8">
        <p>Welcome, {auth.currentUser?.email}</p>
        <button
          onClick={() => auth.signOut()}
          className="w-full bg-red-500 text-white p-2 rounded mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
