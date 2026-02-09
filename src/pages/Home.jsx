import React from 'react';

function Home({ profile }) {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <h2>Name: {profile.name}</h2>
      <p>Bio: {profile.bio}</p>
    </div>
  );
}

export default Home;