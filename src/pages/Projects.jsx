import React, { useState } from 'react';

function About({ setProfile }) {
  const [tempName, setTempName] = useState("");
  const [tempBio, setTempBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ name: tempName, bio: tempBio });
    alert("Profile Updated!");
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setTempName(e.target.value)} /><br/><br/>
        <textarea placeholder="Bio" onChange={(e) => setTempBio(e.target.value)} /><br/><br/>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default About;