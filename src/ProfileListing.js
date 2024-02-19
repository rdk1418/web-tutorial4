import React, { useState, useEffect } from 'react';
import './ListStyles.css';
import { Card, CardContent, Typography, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom'; 

const ProfileListing = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://express-t4.onrender.com/api/users');
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setUsers(data);
        } else {
          throw new Error('Failed to fetch users');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="profile-listing-container">
      <h1 className="listing-title">User Profiles</h1>
      <TextField
        id="search"
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px' }}
        InputProps={{
          style: {
            backgroundColor: '#fff',
            borderRadius: '5px',
          },
        }}
      />
      <Grid container spacing={3}>
        {filteredUsers.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user._id}>
            <Link to={`/profile/${user._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card className="user-card">
                <img src={user.picture} alt={`Profile of ${user.name}`} className="user-image" />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {user.name}
                  </Typography>
                  <Typography variant="body1" component="p">
                    Email: {user.email}
                  </Typography>
                  <Typography variant="body1" component="p">
                    Phone: {user.phone}
                  </Typography>
                  <Typography variant="body1" component="p">
                    Status: {user.isActive ? 'Active' : 'Inactive'}
                  </Typography>
                  <Typography variant="body1" component="p">
                    Age: {user.age}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProfileListing;
