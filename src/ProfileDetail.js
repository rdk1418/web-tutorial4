import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProfileDetail.css';

const ProfileDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error('Failed to fetch user');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="profile-detail-container">
      {user ? (
        <div>
          <img src={user.picture} alt={`Profile of ${user.name}`} className="profile-image" />
          <h2>{user.name}</h2>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Status:</b> {user.isActive ? 'Active' : 'Inactive'}</p>
          <p><b>Age: </b>{user.age}</p>
          <p><b>Balance: </b>{user.balance}</p>
          <p><b>Eye Color:</b> {user.eyeColor}</p>
          <p><b>Company:</b> {user.company}</p>
          <p><b>Address:</b> {user.address}</p>
          <p><b>About:</b> {user.about}</p>
          <p><b>Registered:</b> {user.registered}</p>
          <p><b>Latitude: </b>{user.latitude}</p>
          <p><b>Longitude:</b> {user.longitude}</p>
          <p><b>Favorite Fruit: </b>{user.favoriteFruit}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileDetail;
